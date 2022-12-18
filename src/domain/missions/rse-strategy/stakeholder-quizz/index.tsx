import Header from "./components/header/header"
import Welcome from "./components/welcome/welcome"
import QuestionCard, { Question } from "./components/question-card/question-card"
import QuestionListDisplay from "./question-list-display/question-list-display"
import { useQuery } from "@blitzjs/rpc"
import list_question from "../queries/list-question-quizz"
import React, { FC } from "react"
import { useRouter } from 'next/router'

export type Answer = {
  id: number
  value: number
  type: string
}

const StakeholderQuizz: FC<{}> = ({ }) => {
  const router = useRouter();

  const { mission, demand} = router.query;

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [selectedTheme, setSelectedTheme] = React.useState([] as string[])
  const [questions] = useQuery(list_question, selectedTheme);
  const [answers, setAnswers] = React.useState([] as Answer[])
  const [showQuestionList, setShowQuestionList] = React.useState(false)

  const nextPage = async () => {
    await router.push('/mission/rse_strategy/thanks')
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const addAnswer = (id: number, value: number, type: string) => {
    setAnswers([...answers, {id, value, type}])
  }

  return (
    <div>
      <Header />
      { !showQuestionList && <Welcome startQuestion={() => setShowQuestionList(true)} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}  /> }
      { showQuestionList &&
        <>
          <QuestionListDisplay questions={questions} currentQuestion={currentQuestion} />
          <QuestionCard
            question={questions[currentQuestion] as Question}
            nextQuestion={nextQuestion}
            setAnswer={addAnswer}
            last={currentQuestion === questions.length - 1}
            answers={answers}
            mission_id={mission}
            demand={demand as string}
            nextPage={nextPage}
          />
        </>
      }
    </div>
  )
}

export default StakeholderQuizz
