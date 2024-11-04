import Error from '../Error'
import Width from '../Width'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

interface TextareaField {
  name: string
  label?: string | null
  width?: number | null
  defaultValue?: string | null
  required?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType: 'textarea'
}
const TextArea: React.FC<
  TextareaField & {
    register: UseFormRegister<FieldValues & any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width as number}>
      <div>
        <label htmlFor={label ?? ''}>{label}</label>

        <div className='user-form'>
          <textarea
            style={{ marginBottom: '20px' }}
            id={label ?? ''}
            {...register(name, { required: requiredFromProps as boolean })}
          />
        </div>
        {requiredFromProps && errors[name] && (
          <Error error={errors[name]} label={label!} />
        )}
      </div>
    </Width>
  )
}
export default TextArea
