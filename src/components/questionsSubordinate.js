import React, { useState } from "react";
import StarRating from "./stars.js";
import feedbackPost from "../Services/feedbackPost.js";
import './questions.css';

function QuestionsSubordinates() {

    const [arr,setArr]=useState([]);

    const handleSubmit=(e)=>{
        console.log(arr[0]);
        e.preventDefault();
       
        feedbackPost.register(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]).then(
            (res) => {
                console.log("Successfull");
            },
            (error) => {
                console.log("Failed");
            }
        )
    }
    return(
        <div>
            <h2>Rating your Subordinate</h2>
            {/* <form className="Questions"> */}
            <div>
                <label><b>1. How likely is it that you would recommend this employee to a Colleague?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>2. How good is the quality of this employee's work?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>3. How well does the employee work with others?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>4. How well does this employee handle criticism of their work?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>5. How well does this employee adjust to changing priorities?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>6. How well does this employee solve problems independently?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
            </div>
            <label><b>Provide any Comment!!</b></label>
            <div><textarea placeholder="Comment"></textarea></div>
                
                <button style={styles.button} onClick={handleSubmit}>Submit Feedback</button>
            {/* </form> */}
        </div>
    )
}

const styles ={
    button: {
      padding:10,
      width:170,
      marginTop: "15px"
    }
  }

export default QuestionsSubordinates;