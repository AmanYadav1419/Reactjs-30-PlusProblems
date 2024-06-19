
// question :- Build a basic routing setup with React Router

import React from 'react'
import FormInput from '../3rd-Problem/FormInput'
import TimerCountDown from '../7th-Problem/TimerCountDown'

const BasicRoute = () => {
  return (
    <BrowserRoute>
    <nav>
        <ul>
            <li><Link to='/'>FormInput</Link></li>
            <li><Link to='/timer'>TimerCountDown</Link></li>
        </ul>
    </nav>


    <Routes>
        <Route path='/' element={<FormInput />} />
        <Route path='/timer' element={<TimerCountDown />} />
    </Routes>
    </BrowserRoute>
  )
}

export default BasicRoute