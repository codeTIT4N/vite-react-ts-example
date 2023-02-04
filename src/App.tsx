import "./App.css"
import { useMultistepForm } from './useMultistepForm'

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <h1 >Just trying out Vite + React + TS</h1>,
    <h1 >Looks pretty similar to CRA so far!</h1>,
    <h1 >Very fast project setup</h1>,
    <h1 >The HMR is amazing!</h1>,
    <h1 >Thankyou!</h1>
  ])

  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Ariel",
      marginTop: "20%"
    }}>
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end"
        }}></div>
        {!isFirstStep && <button type='button' onClick={back}>Back</button>}
        <button type='button' onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
      </form>
    </div>
  )
}

export default App
