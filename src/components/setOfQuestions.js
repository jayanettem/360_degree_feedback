import React, { useState } from "react";
import StarRating from "./stars.js";
import feedbackPost from "../Services/feedbackPost.js";
import './questions.css';

function Questions() {

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
            {/* <form className="Questions"> */}

            <div>
                <h2>Rating your Subordinate</h2>
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
                <label><b>6. Client Feedback?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
            </div>

            <div>
                <h2>Rating your Superior</h2>
                <label><b>1. How likely is it that you would recommend your manager to a Colleague?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>2. How easy it is to get help from your manager when you want it?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>3. How often does your manager give you feedback about your work?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>4. How effective is the training you recieve from Manager?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>5. How often does your Manager listen to employee's opinion while making decision?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>6. How professional does your Manager behave?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
            </div>

            <div>
                <h2>Rating your Co-Worker</h2>
                <label><b>1. How likely is it that you would recommend this employee to a Colleague?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>2. How often is your co-worker late to work?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>3. How much attention to detail does your co-worker have?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>4. How well does your co-worker communicate with others?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>5. How professionally does your co-worker behave?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
                <label><b>6. How well does your co-worker collabrate with other employees?</b></label>
                <StarRating setarr={setArr} starArr={arr}/>
            </div>

            <p className="cmnt"><b>Provide any Comment!!</b></p>
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

export default Questions;