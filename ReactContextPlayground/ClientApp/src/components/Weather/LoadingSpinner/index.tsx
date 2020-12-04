import React from "react";

import styles from "./index.module.css";

export default function CircleSpinner() { 
    return <div className="my-4">
        <div className={styles.loader}/>
    </div>
}