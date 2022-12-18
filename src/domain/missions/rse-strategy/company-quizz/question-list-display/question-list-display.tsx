import React, { FC } from 'react'

type QuestionListDisplayProps = {
  questions: any[]
  currentQuestion: number
}
const QuestionListDisplay: FC<QuestionListDisplayProps> = ({ questions, currentQuestion}) => {

  return (
    <div className="flex justify-center items-center mb-[32px]">
      { questions.map((question, index) =>
          <div key={index} className={`w-[18px] h-[18px] mr-[6px] rounded-full ${index < currentQuestion ? 'bg-primary-text' : 'bg-neutral-400'}`}/>
      )}


    </div>
  )
}

export default QuestionListDisplay
