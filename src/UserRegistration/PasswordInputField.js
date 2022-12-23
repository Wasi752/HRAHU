function PasswordInputField({ handleValidation, handlePasswordChange, passwordValue, passwordError }) {
    return (
        <>
            <div className='bg-gray-800 flex flex-col justify-center px-[0%] py-[1%]'>
                <input
                    type="password"
                    value={passwordValue} 
                    onChange={handlePasswordChange} 
                    onKeyUp={handleValidation} 
                    name="password" 
                    placeholder="Password" 
                    className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    />
                <p className="text-xl">{passwordError}</p>
            </div>

        </>
    )
}
export default PasswordInputField;