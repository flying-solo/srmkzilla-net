import React from 'react'
import Head from 'next/head'
import Navbar from '../shared/components/navbar'
import Footer from '../shared/components/footer'
import Router from 'next/router'
import { getEvent, register } from '../utils/api'
import { Field } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerFormData, registerValidationSchema } from '../utils/schema'
import { Formik, Form } from 'formik'
type EventProps = {
  title: string
  description: string
  slug: string
  _id: string
  startDate: Date
  icons: string[]
  eventCover: string
  isCompleted: boolean
  err?: string
}

const Register = ({ title, description, eventCover, slug }: EventProps) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const initialValues: registerFormData = {
    name: '',
    registrationNumber: '',
    email: '',
    phoneNumber: '',
  }
  const banner = eventCover ? eventCover : '/public/images/banner.png'
  const handleSubmit = async (values: registerFormData) => {
    try {
      setLoading(true)
      const postData = {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber && parseInt(values.phoneNumber),
        regNumber: values.registrationNumber,
        slug: slug,
      }
      const registerUser = await register(postData)
      if (registerUser.status == 201) {
        setLoading(false)
        toast.success('Registered successfully !')
        setTimeout(() => {
          Router.push('/')
        }, 1000)
      } else {
        toast.warn('Oops ! Something went wrong !')
      }
    } catch (error) {
      toast.warn('Oops ! Something went wrong !')
    }
  }
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>{title} Registration</title>
      </Head>
      <div className="bg-black overflow-hidden ">
        <Navbar />
        <ToastContainer />

        <div className="flex justify-center mt-16">
          <div
            className="flex flex-col w-5/6 justify-center items-center mt-12  rounded-2xl sm:flex-row"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="w-full px-4 flex flex-col items-center m-2 h-2/3 sm:w-2/5 sm:items-start sm:p-2 sm:m-6">
              <h1 className="text-white text-4xl r font-bold p-2 mb-6 lg:text-5xl ">
                {title}
              </h1>

              <h4 className="w-full ml-2 text-white text-lg font-thin lg:text-base xl:w-2/3 sm:font-light">
                {description}
              </h4>
            </div>

            <div className=" w-full items-center  sm:w-3/5 h-auto p-1 flex flex-col m-1  sm:items-end justify-around sm:mb-20 sm:p-4 sm:m-4">
              <div className="flex flex-col p-2 m-2  items-center sm:items-end  justify-around  sm:pt-10">
                <h1 className="text-white text-4xl font-bold p-2 mb-6 lg:text-5xl">
                  Register
                </h1>

                <Formik
                  className="flex flex-col p-2 m-2  items-end justify-around"
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={registerValidationSchema}
                  enableReinitialize
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                        <Field
                          className="border-b-2  border-white bg-transparent  w-56 text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72  outline-none   appearance-none bg-transparent "
                          placeholder="Full Name"
                          name="name"
                          type="text"
                        />
                        {touched.name && errors.name && (
                          <div className="text-red-500 mt-2 text-sm">
                            {errors.name}
                          </div>
                        )}
                      </div>
                      <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                        <Field
                          className="border-b-2  border-white w-56 bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                          placeholder="Email"
                          name="email"
                          type="email"
                        />
                        {touched.email && errors.email && (
                          <div className="text-red-500 mt-2 text-sm">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                        <Field
                          className="border-b-2 border-white w-56 bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                          placeholder="Registration Number"
                          name="registrationNumber"
                          type="text"
                        />
                        {touched.registrationNumber &&
                          errors.registrationNumber && (
                            <div className="text-red-500 mt-2 text-sm">
                              {errors.registrationNumber}
                            </div>
                          )}
                      </div>
                      <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                        <Field
                          className="border-b-2   border-white w-56 bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                          placeholder="Mobile Number"
                          name="phoneNumber"
                          type="text"
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                          <div className="text-red-500 mt-2 text-sm">
                            {errors.phoneNumber}
                          </div>
                        )}
                      </div>
                      <button
                        disabled={Object.keys(errors).length > 0 || loading}
                        className={`w-full m-1 sm:w-48 flex justify-around items-center py-1 bg-registerGreen rounded-md px-2 cursor-pointer  ${
                          Object.keys(errors).length > 0 ||
                          (loading && 'cursor-not-allowed')
                        }`}
                        type="submit"
                      >
                        <span className="font-medium text-lg font-medium">
                          {loading ? 'Please wait...' : 'REGISTER'}
                        </span>
                        <img src="../images/register_vector.png"></img>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export async function getServerSideProps(context: { query: { event: any } }) {
  const eventSlug = context.query != undefined ? context.query.event : null
  let checkIfEventExist: EventProps
  if (eventSlug == null) return { notFound: true }
  try {
    checkIfEventExist = await getEvent(eventSlug)
  } catch (err) {
    return {
      notFound: true,
    }
  }
  return {
    props: checkIfEventExist,
  }
}

export default Register