const PasswordConfirm = (passplaceholder, passLabel, confPassLabel) => {
    return(
        <>
            <label htmlFor="pass">{label}</label>
            <input type="password" id="pass" name="pass" placeholder={placeholder} />

            <label htmlFor="confPass">{confPassLabel}</label>
            <input type="password" id="confPass" name="confPass" placeholder={placeholder} />
        </>
    );
};

export default PasswordConfirm;