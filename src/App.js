import React from "react";
import { Formik } from "formik";
const App = () => {
  return (
    <>
      <div className="container-lg">
        <div className="text-danger py-3 fs-3 bg-dark fw-bold text-center">
          Lead Generation Website
        </div>
        <div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="bg-secondary d-flex justify-content-center"
                style={{ height: "500px" }}
              >
                <div
                  className="d-flex flex-column justify-content-around flex-wrap align-content-center"
                  style={{ height: "400px", width: "60%" }}
                >
                  <div className="w-75">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="fs-4"
                      style={{ width: "100%" }}
                      placeholder="Enter your name"
                    />
                  </div>
                  {errors.name && touched.name && errors.name}
                  <div className="w-75">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="fs-4"
                      style={{ width: "100%" }}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="text-danger fs-5">
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="w-75">
                    <textarea
                      type="text"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      style={{ width: "100%", height: "150px" }}
                      placeholder="Write message..."
                    ></textarea>
                  </div>

                  {errors.message && touched.message && errors.message}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="fs-4 btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default App;
