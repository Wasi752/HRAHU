function ConfirmPasswordInputField({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}){
    return (
        <>
     <div className='bg-gray-800 flex flex-col justify-center px-[0%] py-[1%]'>
        <input 
        type="password" 
        value={confirmPasswordValue}  
        onChange={handlePasswordChange} 
        onKeyUp={handleValidation} 
        name="confirmPassword" 
        placeholder="Confirm Password" 
        className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
        />
        <p className="text-xl">{confirmPasswordError}</p>
    </div>
        </>
    )
}
export default ConfirmPasswordInputField;