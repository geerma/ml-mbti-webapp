import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [model, setModel] = useState(1);
  const [response, setResponse] = useState();

  const handleSubmit = () => {
    console.log(text);
    console.log(model);
    if (text.length < 200) {
      window.alert("Please enter text longer than 200 characters");
    }
    fetchResponse();
  };

  const exampleText1 = () => {
    var text = "NO ONE CHANGES THE WORLD ALONE. It's a simple truth, but a powerful one. And it's a sentiment that has guided me my entire life. It's what led me to Chicago as a young man, eager to make a difference but unsure how to do it, searching for mentors and a community that I might be able to help out. It's what sustained my campaigns and my time in the White House—the support of millions of people who shared the belief that lasting change can only come from the bottom up. And it's the idea that Michelle and I have devoted our lives to through our Foundation, an organization committed to inspiring, empowering, and connecting people with the voice and the vision for a better tomorrow. Because the world can use more leaders. I saw that clearly during my time in the White House, and I believe that even more today. When global progress is halted, it's not because we lack the solutions to our problems. People don't go hungry because we don't know how to grow food. Children don't die because we lack cures to common diseases. Schools don't fail because we don't know how to provide a quality education. We face these and other challenges, as unique as they are, for a similar reason: because we need the kind of inclusive, ethical leadership that can channel a people's will into progress that benefits everyone. We need fresh eyes and diverse perspectives that can help us question and change our current ways of thinking. That's why the Obama Foundation is supporting emerging leaders throughout the world—because we believe that the community leaders of today will become the global leaders of tomorrow."
    setText("Hello")
  }

  const fetchResponse = async () => {
    fetch("http://127.0.0.1:5000/prediction/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "Text Input": text,
        "Model Choice": model,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>MBTI Personality Prediction</h1>
      <h2>Predict your MBTI via Machine Learning Models!</h2>
      <div>
        <div>
          <label>Text</label>
          <textarea
            type="text"
            cols="50"
            rows="30"
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
        </div>
        <div>
          <label>Want some Example Text?</label>
          <button onClick={() => exampleText1()}>Example Text 1</button>
          <button onClick={() => exampleText2()}>Example Text 2</button>
        </div>
        <div>
          <label>Model Choice</label>
          <select onChange={(e) => setModel(e.target.value)}>
            <option>Support Vector Classifier</option>
            <option>Random Forest</option>
          </select>
        </div>
        <div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>

        {response != undefined ? (
          <div>
            <p>Response:</p>
            <p>Prediction: {response.result}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
