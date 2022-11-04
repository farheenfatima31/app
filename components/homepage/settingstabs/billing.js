import React, { Fragment, useEffect, useState } from "react";
import Edit_payment_detials from "../../../pages/settings/Edit_payment_detials";
import Payment_history from "../../dialog/payment_history";
import styles from '../../../styles/billings.module.css';
import Api from "../../api/api";

function Billing() {
    const [openpaymentdetails, setopenpaymentdetails] = useState(false);
    const [openpaymenthistory, setopenpaymenthistory] = useState(false);
    const [accDetails, set_accDetails] = useState([]);
    const [url, seturl] = useState("")
    const [data, set_data] = useState([]);
    const [videoInfo, set_videoInfo] = useState([]);
    const [videoAdded, set_videoAdded] = useState([]);
    const [videoStreamed, set_videoStreamed] = useState([]);
    const [videostored, set_videostored] = useState([]);
    const createdDate = (date) => {
        var d = new Date(date);
        return d.toLocaleString('en-IN', { day: "2-digit" });
    }
    const createdMonth = (date) => {
        var m = new Date(date);
        return m.toLocaleString('en-IN', { month: "short" });
    }
    const createdYear = (date) => {
        var y = new Date(date);
        return y.toLocaleString('en-IN', { year: "numeric" });
    }
    useEffect(() => {
        account_info(1)
    }, [])
    const account_info = () => {
        Api.Get_account_info()
            .then(res => {
                if (res.data.status = "Success") {
                    set_data(res.data.data.breakup)
                    seturl(res.data.data.changeBillingUrl)
                    set_videoInfo(res.data.data)
                    set_videoAdded(res.data.data.breakup["Encoded Minutes"])
                    set_videoStreamed(res.data.data.breakup["Streamed Minutes"])
                    set_videostored(res.data.data.breakup["Storage Minutes"])
                    if (res && res.data && res.data.data && res.data.data.billingInfo) {
                        set_accDetails(res.data.data.billingInfo)
                    }
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    let email;
    if (process.browser) {
        email = localStorage.getItem("ownerEmail");
    }
    const ownerEmail = email;
    const billing_data = () => {
        return (

            Object.keys(data).map((item, keys) => {
                return (
                    <>
                        {data[item].amountCharged &&
                            <tr key={keys}>
                                <td>{item}</td>
                                <td>$ {data[item].amountCharged}</td>
                                <td>{data[item].minutesUsed} mins</td>
                                <td>$ {data[item].pricePerMinute}</td>
                            </tr>
                        }
                    </>

                )
            })

        )
    }
    return (
        <Fragment>
            <div className={styles.container1}>
                {[videoInfo].map((items, key) =>
                    <div key={key}>
                        <div className={styles.query}>
                            <p>
                                Manage Billing for both Video and Data plans here.Feel free   to <a href="#">contact us</a> for any queries related billing.
                            </p>
                            <a href={url} rel="noreferrer" target="_blank"><button className="btn">Edit Payment Details</button></a>
                        </div>
                        {/* {openpaymentdetails && <Edit_payment_detials closepaymentdetails={setopenpaymentdetails} />} */}
                        <div className={styles.payment}>
                            <h4>Next payment:   {createdMonth(items.subscriptionEnd)} {createdDate(items.subscriptionEnd)},{createdYear(items.subscriptionEnd)}</h4>
                        </div>
                        <div className={styles.tables_left}>
                            <div className={styles.Video_consumption}>
                                <div className={styles.consumption}>
                                    <span className={styles.Video_consumption_heading}>Video Consumption</span>
                                    <span className={styles.Video_consumption_date}>({createdMonth(items.subscriptionStart)} {createdDate(items.subscriptionEnd)} - {createdMonth(items.subscriptionEnd)} {createdDate(items.subscriptionStart)} billing cycle)</span>
                                </div>

                                {/* <span> <a href="#">change Plan</a></span> */}
                                {items.hasActiveSubscription == true ?
                                <table>
                                    <tbody>
                                        {data && billing_data()}
                                        <tr>
                                            <td>Videograph credit</td>
                                            <td>{items.amountRemaining}$ remaining</td>
                                            <td></td>
                                            <td>($ {items.amountChargeable})</td>
                                        </tr>
                                        <tr className={styles.current_video_cost}>
                                            <td >Current Video Cost</td>
                                            <td></td>
                                            <td></td>
                                            <td>$ {items.amountChargeable}</td>
                                        </tr>
                                    </tbody>
                                </table> : null}
                            </div>
                        </div>
                        {openpaymenthistory && <Payment_history closepaymenthistory={setopenpaymenthistory} />}
                        <div className={styles.tables_right}>
                            <div className={styles.payment_details}>
                                <div className={styles.paymentDet}>
                                    <span className={styles.payment_details_heading}>Account Payment Details</span>
                                    <span className={styles.view_payment_history}> <a onClick={() => setopenpaymenthistory(true)}>View Payment history</a></span>
                                </div>

                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Card</td>
                                            <td className={styles.text_align}><img src="/images/iconawesome-cc-visa.svg" alt="icon"></img>{accDetails.lastFour}</td>
                                        </tr>
                                        <tr>
                                            <td>Expiration Date</td>
                                            <td className={styles.text_align} >{accDetails.expMonth}/{accDetails.expYear}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td className={styles.text_align}>{ownerEmail}</td>
                                        </tr>
                                        <tr>
                                            <td>Zip code</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                        <tr>
                                            <td>Billing Address</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                        <tr>
                                            <td>Billing Address 2</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td className={styles.text_align}>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className={styles.data_consumption}>
                            <span className={styles.data_consumption_heading}>Data Consumption</span>
                            <span className={styles.data_consumption_date}>({createdMonth(items.subscriptionStart)} {createdDate(items.subscriptionEnd)} - {createdMonth(items.subscriptionEnd)} {createdDate(items.subscriptionStart)} billing cycle)</span>
                            <span> <a href="#">change Plan</a></span>
                            <table>
                                <tbody>

                                    <tr>
                                        <td>Subscription Plan</td>
                                        <td>Starter(monthly)</td>
                                        <td>($ 0.00) paid</td>
                                    </tr>
                                    <tr>
                                        <td>Total Views</td>
                                        <td>0 Views</td>
                                        <td>at 0.05</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.views}>Views from MUX Video(free)</td>
                                        <td>0 views</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.views}>Views covered by plan</td>
                                        <td>0 views</td>
                                        <td>at 0.0012</td>
                                    </tr>
                                    <tr className={styles.current_video_cost}>
                                        <td >Current Video Cost</td>
                                        <td ></td>
                                        <td>$ 0.00 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Billing;