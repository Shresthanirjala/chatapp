import React from 'react'
import SignUp from '../signup/SignUp';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-seibold text-center text-gray-300'>Login
                <span className='text-blue-500'>ChatApp💬</span>
            </h1>
            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="enter username" className='w-full input input-borderes h-10' />
                </div>
                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="enter password" className='w-full input input-borderes h-10' />
                </div>
                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have a account? </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>

            </form>
       
        </div>
        

    </div>
  )
}

export default Login;


//STARTER CODE 

// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-seibold text-center text-gray-300'>Login
//                 <span className='text-blue-500'>ChatApp💬</span>
//             </h1>
//             <form action="">
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder="enter username" className='w-full input input-borderes h-10' />
//                 </div>
//                 <div>
//                 <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder="enter password" className='w-full input input-borderes h-10' />
//                 </div>
//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have a account?</a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>Login</button>
//                 </div>

//             </form>
       
//         </div>
        

//     </div>
//   )
// }

// export default Login