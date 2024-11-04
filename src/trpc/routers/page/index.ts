import { collectionSlug } from '@contentql/core'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'
import { ensurePath } from '@/utils/ensurePath'
import { matchNextJsPath } from '@/utils/matchNextJsPath'

const payload = await getPayloadHMR({
  config: configPromise,
})

export const pageRouter = router({
  getPageData: publicProcedure
    .input(
      z.object({
        path: z.any(),
      }),
    )
    .query(async ({ input }) => {
      try {
        let { path } = input
        if (!path) path = '/'
        if (Array.isArray(path)) path = path.join('/')
        if (path !== '/') path = ensurePath(path).replace(/\/$/, '')

        const { docs: allPages } = await payload.find({
          collection: collectionSlug.pages,
          depth: 3,
          pagination: false,
        })

        if (!allPages?.length) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Pages not found',
            cause: 'INITIAL_SETUP',
          })
        }

        if (!allPages?.length) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Page not found' })
        }

        const correctMatching = allPages.find(page => page.path === path)

        const matchingPage =
          correctMatching ??
          allPages.find(page => matchNextJsPath(path, page.path!))

        if (!matchingPage) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Page not found' })
        }

        return matchingPage
      } catch (error: any) {
        if (error instanceof TRPCError) {
          throw error
        }

        console.error('Error fetching page data:', error)

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Internal server error',
        })
      }
    }),

  getAllPages: publicProcedure.query(async () => {
    try {
      const { docs } = await payload.find({
        collection: 'pages',
        draft: false,
        pagination: false,
      })

      return docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
