import React from "react";

function App() {
  return (
    <>
      <div>
        <nav className="flex justify-center bg-green-600 h-20 m-0.5 border-2 border-yellow-300 relative items-center text-center">
          <img
            src="../img/logo.jpg"
            alt=""
            className="h-8 w-22 absolute bottom-0 left-0"
          />
          <h1 className="text-bold text-xl text-white">
            Competent Authority <br />
            Government of Madhya Pradesh
          </h1>

          <p className="text-sm absolute font-semibold bottom-0 right-1 text-white">
            brought to you by <span className="underline text-yellow-400">National Informatics Centre</span>
          </p>
        </nav>

        <div className="flex flex-col justify-center items-center my-2 border-2 relative border-green-600 p-6 ">
          <img src="../img/r.gif" alt="" className="absolute right-0 top-0" />
          <h1 className=" text-blue-600 underline text-2xl font-serif font-bold">
            Madhya Pradesh Board of Secondary Education Examination Results
            -2024
          </h1>{" "}
          <br />
          <a href="https://mpresults.nic.in/mpbse/hsc10_2023/X_class_23.htm">
            <h1 className=" text-orange-800  underline mt-4 text-2xl font-bold">
              HSC (Class 10th) Examination Results -2024
            </h1>
            <p className=" text-orange-800  underline text-center mb-4 font-bold">
              {" "}
              Results will be declared on 24/04/2024 at 04:00 PM
            </p>
          </a>
          <a href="https://mpresults.nic.in/mpbse/HSSC12_23/HSSC_2023-XII.htm">
            {" "}
            <h1 className=" text-orange-800 underline mt-4 text-2xl font-bold">
              HSSC (Class 12th) Examination Results -2024
            </h1>
            <p className=" text-orange-800  underline mb-10 text-center  font-bold">
              {" "}
              Results will be declared on 24/04/2024 at 04:00 PM
            </p>
          </a>
          <a className="cursor-pointer absolute right-1 bottom-14 text-orange-800  mt-4underline text-2xl font-bold">
            Previous Result
          </a>
          <a className="cursor-pointer absolute bottom-0 text-orange-800 underline  mt-4underline text-2xl font-bold">
            Result Page Updated on 24/04/2024{" "}
          </a>
        </div>

        <div className="bg-lime-500 my-2  border-2 border-yellow-300 text-center">
          <h1>
            {" "}
            <span className="text-red-600">Note:</span> Neither{" "}
            <span className="text-red-900 underline">NIC</span> nor{" "}
            <span className="font-semibold">
              (Competent Authority Madhya Pradesh Government )
            </span>{" "}
            is responsible for any inadvertent error that may have crept in the
            results being published on{" "}
            <span className="font-semibold">NET</span> . The results published
            on net are for immediate information to the examinees.
          </h1>
        </div>

        <div className="text-center my-4">
          <p>
            {" "}
            Hosted By
            <span className="text-amber-900 underline">
              {" "}
              National Informatics Centre (NIC)
            </span>
          </p>
          <h1>
            Data Provided By (Competent Authority Madhya Pradesh Government)
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
