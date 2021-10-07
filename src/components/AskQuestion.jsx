import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import "../styles.css";
import questionsFunc from '../files/questions';
// import { Redirect } from 'react-router-dom';

function AskQuestion(props) {
    const [questions, setQuestions] = useState(questionsFunc);
    const [category,setCategory] = useState("Self");
    const [state, setState] = useState(false);
    const [suggestions,setSuggestions] = useState([]);
    const [inputstate,setInput] = useState("");
    const setInputState=(e)=>{
        let val=e.target.value;
        setInput(val);
    }
    useEffect(function(){
        let tempArr=questions.filter((question)=>{
            return question.name==category
        })
        let tempObj=tempArr[0];
        setSuggestions(tempObj.suggestions);
    },[category]);
    const askAQuestion = () => {
        if (inputstate != "") {
            setCategory(inputstate);
            setState(true);
            setInput("");
        }
    }
    const askASpecificQuestion=()=>{

    }
    let useStyles = makeStyles({
        button: {
            backgroundColor: "#e97d31",
            height: "1.5rem",
            borderRadius: "5px",
            padding: "5px 23px",
            color: "white",
            cursor: "pointer"

        },
        talkNow: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        rates: {
            width: "3rem",
            wordWrap: "break-word"
        }
    })
    let classes = useStyles();
    return (
         state == true ?
            <div>
                <div style={{ fontWeight: "bold" }}>
                    Ask a Question
                </div>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dicta et dolor molestias asperiores aspernatur atque sapiente modi iusto vitae, omnis dolore ipsa libero maxime magnam deserunt impedit velit incidunt.
                </Typography>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "30px 5rem"
                }}>
                    <div style={{ fontWeight: "bold" }}>
                        Choose Question
                    </div>
                    <input value={inputstate} onChange={setInputState} style={{ height: "2rem" }} placeholder="Select a category:Love, career, more" list="browsers" name="browser" id="browser" />
                    <datalist id="browsers">
                        {suggestions.map(function (suggestedQues) {
                            return (<option value={suggestedQues} />);
                        })}
                    </datalist>
                    <div className={classes.talkNow}>
                        <div style={{ display: "flex" }}>
                            <div className={classes.rates}>
                                Rs.{ }
                            </div>
                            <div style={{ opacity: "0.5" }}>
                                (Including GST)
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ fontWeight: "bold", paddingRight: "15px" }}>
                                Ideas what to ask
                            </div>
                            <div onClick={askASpecificQuestion} className={classes.button}>
                                Ask a Specific Question
                            </div>
                        </div>

                    </div>
                </div>
            </div> : < div >
                <div style={{ fontWeight: "bold" }}>
                    Ask a Question
                </div>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dicta et dolor molestias asperiores aspernatur atque sapiente modi iusto vitae, omnis dolore ipsa libero maxime magnam deserunt impedit velit incidunt.
                </Typography>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "30px 5rem"
                }}>
                    <div style={{ fontWeight: "bold" }}>
                        Choose Category
                    </div>
                    <input  value={inputstate} onChange={setInputState} style={{ height: "2rem" }} placeholder="Select a category:Love, career, more" list="browsers" name="browser" id="browser" />
                    <datalist id="browsers">
                        {questions.map(function (question) {
                            return (<option value={question.name} />);
                        })}
                    </datalist>
                    <div className={classes.talkNow}>
                        <div style={{ display: "flex" }}>
                            <div className={classes.rates}>
                                Rs.{99.0}
                            </div>
                            <div style={{ opacity: "0.5" }}>
                                (Including GST)
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ fontWeight: "bold", paddingRight: "15px" }}>
                                Ideas what to ask
                            </div>
                            <div onClick={askAQuestion} className={classes.button}>
                                Ask a Question 
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        
    )
}

export default AskQuestion
