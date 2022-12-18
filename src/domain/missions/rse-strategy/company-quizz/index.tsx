import Header from "./components/header/header"
import LogoBand from "../logo-band/logo-band"
import Welcome from "./components/welcome/welcome"
import QuestionCard, { Question } from "./components/question-card/question-card"
import QuestionListDisplay from "./question-list-display/question-list-display"
import { useQuery } from "@blitzjs/rpc"
import list_question from "../queries/list-question-quizz"
import React, { FC } from "react"


type CompanyQuizzProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}

export type Answer = {
  id: number
  value: number
  type: string
}

const CompanyQuizz: FC<CompanyQuizzProps> = ({ mission_id, update_mission_step}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [questions] = useQuery(list_question, ['laws', 'work', 'environment', 'loyalty', 'consumer', 'community']);
  const [answers, setAnswers] = React.useState([] as Answer[])
  const [showQuestionList, setShowQuestionList] = React.useState(false)

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const addAnswer = (id: number, value: number, type: string) => {
    setAnswers([...answers, {id, value, type}])
  }

  return (
    <div>
      <Header />
      { !showQuestionList && <Welcome startQuestion={() => setShowQuestionList(true)} /> }
      { showQuestionList &&
        <>
          <QuestionListDisplay questions={questions} currentQuestion={currentQuestion} />
          <QuestionCard
            question={questions[currentQuestion] as Question}
            nextQuestion={nextQuestion}
            setAnswer={addAnswer}
            last={currentQuestion === questions.length - 1}
            answers={answers}
            mission_id={mission_id}
            update_mission_step={update_mission_step}
          />
        </>
      }
    </div>
  )
}

export default CompanyQuizz
