import React, { FC } from "react"
import { RadioGroup } from '@headlessui/react'
import Button from "../../../../../../infrastructure/components/inputs/button"
import { useMutation } from "@blitzjs/rpc"
import createAssessmentMutation from "../../../mutations/create-maturity-assessment"
import { Answer } from "../../index"
import createCompanyQuizz from "../../../mutations/create-company-quizz"


export type Question = {

  id: number,
    label: string,
  responseA: string,
  responseB: string,
  responseC: string,
  responseD: string,
  valueA: number,
  valueB: number,
  valueC: number,
  valueD: number,
  type: string
}

type QuestionCardProps = {
  question: {
    id: number,
    label: string,
    responseA: string,
    responseB: string,
    responseC: string,
    responseD: string,
    valueA: number,
    valueB: number,
    valueC: number,
    valueD: number,
    type: string
  }
  nextQuestion: () => void
  setAnswer: (id:number, value: number, type: string) => void
  answers: Answer[],
  last: boolean
  mission_id: number
  update_mission_step: (step: number) => void
}

const QuestionCard: FC<QuestionCardProps> = ({ question, nextQuestion, setAnswer, last, mission_id, answers, update_mission_step }) => {
  const [selected, setSelected] = React.useState<string | null>(null)
  const [create] = useMutation(createCompanyQuizz)
  return (
    <div>
      <p className="text-[18px] font-light text-neutral-800"> {question.label}</p>
        <RadioGroup value={selected} onChange={setSelected}>

          <RadioGroup.Option value="a">
            <div className="w-full bg-neutral-100 p-[15px] rounded-xl flex items-center ml-[32px] mt-[32px] cursor-pointer ui-checked:border-2 ui-checked:border-primary-text border border-neutral-400">
              <div className="w-[50px] h-[50px] bg-primary-main ui-checked:bg-primary-text flex items-center justify-center font-bold text-neutral-100 rounded-xl mr-[15px]">
                A
              </div>
              <p className="text-neutral-800"> {question.responseA}</p>
            </div>
          </RadioGroup.Option>
          <RadioGroup.Option value="b">
            <div className="w-full bg-neutral-100 p-[15px] rounded-xl flex items-center ml-[32px] mt-[8px] cursor-pointer ui-checked:border-2 ui-checked:border-primary-text border border-neutral-400">
              <div className="w-[50px] h-[50px] bg-primary-main ui-checked:bg-primary-text flex items-center justify-center font-bold text-neutral-100 rounded-xl mr-[15px]">
                B
              </div>
              <p className="text-neutral-800"> {question.responseB}</p>
            </div>
          </RadioGroup.Option>
          <RadioGroup.Option value="c">
            <div className="w-full bg-neutral-100 p-[15px] rounded-xl flex items-center ml-[32px] mt-[8px] cursor-pointer ui-checked:border-2 ui-checked:border-primary-text border border-neutral-400">
              <div className="w-[50px] h-[50px] bg-primary-main ui-checked:bg-primary-text flex items-center justify-center font-bold text-neutral-100 rounded-xl mr-[15px]">
                C
              </div>
              <p className="text-neutral-800"> {question.responseC}</p>
            </div>
          </RadioGroup.Option>

          <RadioGroup.Option value="d">
            <div className="w-full bg-neutral-100 p-[15px] rounded-xl flex items-center ml-[32px] mt-[8px] cursor-pointer ui-checked:border-2 ui-checked:border-primary-text border border-neutral-400">
              <div className="w-[50px] h-[50px] bg-primary-main ui-checked:bg-primary-text flex items-center justify-center font-bold text-neutral-100 rounded-xl mr-[15px]">
                D
              </div>
              <p className="text-neutral-800"> {question.responseD}</p>
            </div>
          </RadioGroup.Option>
        </RadioGroup>

      {selected && <div className="flex justify-center mt-[64px] mb-[64px]">
          <Button label={last ? "Terminer" : "Question suivante"} cb={ async () => {
            if (last) {
              await create({ id: mission_id, answers: [...answers, { id: question.id, value: question[`value${selected.toUpperCase()}`], type: question.type }] })
              update_mission_step(8)
            } else {
              setAnswer(question.id,question[`value${selected.toUpperCase()}`] , question.type); nextQuestion(); setSelected(null)
            }
          }}/>
        </div>}

    </div>
  )
}

export default QuestionCard
