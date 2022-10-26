import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
 

import './styles.css'

export function Form() {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: ''
        },
        validationSchema: yup.object().shape({
          name: yup.string().required('Campo obrigatório'),
          email: yup.string().email('Email inválido').required('Campo obrigatório'),
          password: yup.string().min(4, 'No minimo 4 caracteres').max(16, 'No máximo 16 caracteres').required('Campo obrigatório')
        }),
        onSubmit: values => {
          console.log(values)
          formik.resetForm()
        }
      })

    return (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-user" />
              <InputText className={formik.errors.name ? 'p-invalid block' : ''} type="text" id="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Nome" />
            </span>
            {formik.touched.name && formik.errors.name ? (<span className="error-text">{formik.errors.name}</span>) : null}
          </div>
    
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-envelope" />
              <InputText className={formik.errors.email ? 'p-invalid block' : ''} type="email" id="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Email" />
            </span>
            {formik.touched.email && formik.errors.email ? (<span className="error-text">{formik.errors.email}</span>) : null}
          </div>
    
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-lock" />
              <InputText className={formik.errors.name ? 'p-invalid block' : ''} type="password" id="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Senha" />
            </span>
            {formik.touched.password && formik.errors.password ? (<span className="error-text">{formik.errors.password}</span>) : null}
          </div>
    
          <Button type="submit" label="Enviar" />
       </form>
    )
}