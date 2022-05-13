import styles from '../../styles/model.module.css'
import { useEffect, useState, useRef } from 'react'


const CreateSignKey = ({ setOpenCreate, signRes, closesigninkeys }) => {
    let res;
    if(signRes.privateKey!==undefined){
        res=atob(signRes.privateKey)
    }
    const refKey = useRef()
    const refSign = useRef()
    const privateKey = () => {
        refKey.current.select()
        document.execCommand('copy')
    }
    const copySignKey = () => {
        refSign.current.select()
        document.execCommand('copy')
    }
    const downloadFile = () => {
        let privateKey = (refKey.current.value);
        const signElement = document.createElement('a')
        const file = new Blob([privateKey], { type: "text/plain;charset-utf-8" });
        signElement.href = URL.createObjectURL(file);
        signElement.setAttribute('download', `${signRes.signingKeyId}.pem`);
        document.body.appendChild(signElement);
        signElement.click()
    }
const handleClose=()=>{
    document.body.style.overflow='scroll';
    closesigninkeys(false);
    setOpenCreate(false)
}
    return (
        <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} onClick={() => setOpenCreate(false)}><img src="images/close.png" alt='icon' /> </a>
                </div>
                <h2 className={styles.keys}>Below is your new Signinkey Key:</h2>
                <h3 className={styles.keys}>Signin Key ID:</h3>
                <input ref={refSign} defaultValue={signRes.signingKeyId} readOnly />
                <img onClick={() =>  copySignKey()} className={styles.imgCopy} src="images/favicon/copy.png" />
                <h3 className={styles.keys}>Base64-encoded Private Key:</h3>
                <h4 className={styles.keys}>We don&apos;t store this so please memorize it...</h4>
                <textarea ref={refKey} defaultValue={res} readOnly />
                <img  onClick={() => privateKey()} className={`${styles.imgCopy} ${styles.copy}`} src="images/favicon/copy.png" />
                <br/>
                <div className={`${styles.butn} ${styles.keys}`}>
                <a onClick={() => downloadFile()}>Download as .pem file</a>
                </div>
                <br />
                <button onClick={() => handleClose()} className={styles.btn}>Done</button>
            </div>
        </div>
    )
}
export default CreateSignKey