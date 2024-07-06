import React, {useState,useMemo, useEffect} from 'react'
import "../App.css";
import Trivia from './Trivia';
import Timer from './Timer';
import Start from './Start';

function MainSection() {
    const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

    const data = [
        {
          id: 1,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "When did the website Facebook launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },
        {
            id: 4,
            question: "What colour did Lord Shiva's throat turn into when he drank the deadly poison during Samudra Manthan?",
            answers: [
              {
                text: "Red",
                correct: false,
              },
              {
                text: "Blue",
                correct: true,
              },
              {
                text: "Yellow",
                correct: false,
              },
              {
                text: "Black",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            question: "Which state is the largest producer of sugarcane in India?",
            answers: [
              {
                text: "Maharashtra",
                correct: false,
              },
              {
                text: "Uttar Pradesh",
                correct: true,
              },
              {
                text: "Karnatka",
                correct: false,
              },
              {
                text: "Madhya Pradesh",
                correct: false,
              },
            ],
          },
          {
            id: 6,
            question: "Which of these colors when mixed with red will produce the color orange?",
            answers: [
              {
                text: "Voilet",
                correct: false,
              },
              {
                text: "Black",
                correct: false,
              },
              {
                text: "Orange",
                correct: false,
              },
              {
                text: "Yellow",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            question: "Which of these is an ashram set up by Gandhiji set up near Wardha in Maharashtra?",
            answers: [
              {
                text: "Sri Aurobindo Ashram",
                correct: false,
              },
              {
                text: "Parmarth Niketan Ashram",
                correct: false,
              },
              {
                text: "Sevagram",
                correct: true,
              },
              {
                text: "Sivananda Ashram",
                correct: false,
              },
            ],
          },
          {
            id: 8,
            question: "Who of the following personalities is not married to a sports person?",
            answers: [
              {
                text: "Mahesh Bhupathi",
                correct: true,
              },
              {
                text: "Anushka Sharma",
                correct: false,
              },
              {
                text: " Sakshi Singh Rawat",
                correct: false,
              },
              {
                text: "Sharmila Tagore",
                correct: false,
              },
            ],
          },
          {
            id: 9,
            question: "Identify this historic martial artwork fashion of Kerala?",
            answers: [
              {
                text: "Marshal Arts",
                correct: false,
              },
              {
                text: "Kalaripayattu",
                correct: true,
              },
              {
                text: "Taicondo",
                correct: false,
              },
              {
                text: "Youdyattapa",
                correct: false,
              },
            ],
          },
          {
            id: 10,
            question: "Who was the Defense Minister of India when the India-China War of 1962 began?",
            answers: [
              {
                text: "Manohar Parrikar",
                correct: false,
              },
              {
                text: "Rajnath Singh",
                correct: false,
              },
              {
                text: "Nirmala Sitharaman",
                correct: false,
              },
              {
                text: "VK Krishna Menon",
                correct: true,
              },
            ],
          },
          {
            id: 11,
            question: "Which two countries share the longest international land border?",
            answers: [
              {
                text: "Russia-Kazakhstan",
                correct: false,
              },
              {
                text: "USA-Canada",
                correct: true,
              },
              {
                text: " Argentina-Chile",
                correct: false,
              },
              {
                text: "Mongolia-China",
                correct: false,
              },
            ],
          },
          {
            id: 12,
            question: " Which of these mobile games might require the player to walk around in the real go?",
            answers: [
              {
                text: "Gangster",
                correct: false,
              },
              {
                text: "Pub G",
                correct: false,
              },
              {
                text: "Valorant",
                correct: false,
              },
              {
                text: "Pokemon Go",
                correct: true,
              },
            ],
          },
          {
            id: 13,
            question: "Which of these is an international football tournament??",
            answers: [
              {
                text: "T20 World Cup",
                correct: false,
              },
              {
                text: "NBA International",
                correct: false,
              },
              {
                text: "FIFA World Cup",
                correct: true,
              },
              {
                text: "IFL",
                correct: false,
              },
            ],
          },
          {
            id: 14,
            question: "Which planet does not spin on its axis like other planets but rather spins at a 90-degree angle from the plane of its orbit?",
            answers: [
              {
                text: "Uranus",
                correct: true,
              },
              {
                text: "Mars",
                correct: false,
              },
              {
                text: "Saturn",
                correct: false,
              },
              {
                text: "Pluto",
                correct: false,
              },
            ],
          },
          {
            id: 15,
            question: " In which year did the Titanic sink?",
            answers: [
              {
                text: "1902",
                correct: false,
              },
              {
                text: "1906",
                correct: false,
              },
              {
                text: "1910",
                correct: false,
              },
              {
                text: "1912",
                correct: true,
              },
            ],
          }
    ];

    const moneyPyramid = useMemo(
        () =>
          [
        {id:1 , amount: '₹ 2000'},
        {id:2 , amount: '₹ 5000'},
        {id:3 , amount: '₹ 10000'},
        {id:4 , amount: '₹ 50000'},
        {id:5 , amount: '₹ 100000'},
        {id:6 , amount: '₹ 250000'},
        {id:7 , amount: '₹ 500000'},
        {id:8 , amount: '₹ 750000'},
        {id:9 , amount: '₹ 1000000'},
        {id:10 , amount: '₹ 2500000'},
        {id:11 , amount: '₹ 5000000'},
        {id:12 , amount: '₹ 7500000'},
        {id:13 , amount: '₹ 10000000'},
        {id:14 , amount: '₹ 50000000'},
        {id:15 , amount: '₹ 70000000'}
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default MainSection
