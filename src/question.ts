import type {ReactNode} from "react";

export type Question = {
  text: ReactNode;
  answers: [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode
  ],
  correct: number
}
