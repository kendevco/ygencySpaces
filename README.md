# Ygency

This project is built on [ContentQL](https://github.com/contentql), a modern web development platform. Modified and maintained by [KenDev](https://kendev.co).

The purpose of this project is to create Ygency Spaces, a platform for creating and sharing spaces. 
This will consist of a Discord-Like UI with a focus on creating and sharing spaces which enable 
users to communicate and collaborate with each other and the site's AI Assistant. Each channel will have its 
own AI Assistant which will be able to help with tasks such as content maintenance, lead generation,
appointment scheduling and more.

## About ContentQL

ContentQL is a powerful web development platform that combines:
- PayloadCMS
- Next.js (TypeScript)
- Tailwind CSS

It's designed to streamline the development of fast, scalable, and dynamic websites with a focus on:
- Headless content management
- Rich user experiences
- Complex content structures
- API integrations
- UI consistency

## Getting Started

1. `pnpm pull`
2. `pnpm i`
3. `pnpm generate:types`
4. `pnpm dev`

## Required Collections

1. pages
2. blogs

## Development Guidelines

Both collections should implement:
1. Blocks in every page and blog
2. Dynamic Generation using the render from `pin-contentql`
3. Clear documentation for frontend and backend block creation

## Docker Deployment

### Building Image

> After every push to main, we need to update the docker image

`docker build -t ghcr.io/kendevco/ygency:latest . --platform linux/amd64`
`docker push ghcr.io/kendevco/ygency:latest`

### Testing Production version

`sudo docker pull ghcr.io/kendevco/ygency:latest`
`sudo docker run --network="host" -e DATABASE_URI=mongodb://127.0.0.1/pin-hcms ghcr.io/kendevco/ygency:latest`

# Exceptions

`NEXT_PUBLIC_PUBLIC_URL` env variable should not have `/` at the ends

## Important Notes

- `NEXT_PUBLIC_PUBLIC_URL` env variable should not have trailing slashes (`/`)
- Follow the [ContentQL Developer Docs](https://github.com/contentql) for detailed guides and best practices

## Documentation Resources

- [Getting Started Guide](https://github.com/contentql)
- [Integration Guidelines](https://github.com/contentql)
- [Developer Documentation](https://github.com/contentql)

## Credits

Original platform by [ContentQL](https://github.com/contentql)  
Modified and maintained by [KenDev](https://kendev.co)
# ygencySpaces
