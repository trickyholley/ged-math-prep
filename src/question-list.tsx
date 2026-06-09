import type {Question} from "./question.ts";

const QuestionList: Array<Question> = [
  {
    text: <>2<sup>3</sup> x 2<sup>4</sup></>,
    answers: [
      <>2<sup>7</sup></>,
      <>2<sup>12</sup></>,
      <>2<sup>-1</sup></>,
      <>2<sup>1</sup></>,
    ],
    correct: 0
  },
  {
    text: <>(3<sup>7</sup> x 2<sup>4</sup>)<sup>1</sup> x (3<sup>5</sup> x 2)<sup>2</sup></>,
    answers: [
      <>3<sup>17</sup> x 2<sup>6</sup></>,
      <>3<sup>12</sup> x 2<sup>5</sup></>,
      <>3<sup>17</sup> x 2<sup>5</sup></>,
      <>3<sup>12</sup> x 2<sup>6</sup></>,
    ],
    correct: 0
  },
  {
    text: <>5<sup>2</sup> x 5<sup>3</sup></>,
    answers: [
      <>5<sup>6</sup></>,
      <>5<sup>5</sup></>,
      <>25<sup>5</sup></>,
      <>5<sup>-1</sup></>,
    ],
    correct: 1
  },
  {
    text: <>(4<sup>2</sup>)<sup>3</sup></>,
    answers: [
      <>4<sup>5</sup></>,
      <>4<sup>8</sup></>,
      <>4<sup>6</sup></>,
      <>4<sup>9</sup></>,
    ],
    correct: 2
  },
  {
    text: <>3<sup>4</sup> x 3<sup>2</sup> x 3</>,
    answers: [
      <>3<sup>6</sup></>,
      <>3<sup>8</sup></>,
      <>3<sup>7</sup></>,
      <>9<sup>7</sup></>,
    ],
    correct: 2
  },
  {
    text: <>(2<sup>3</sup> x 5<sup>2</sup>)<sup>2</sup></>,
    answers: [
      <>2<sup>5</sup> x 5<sup>4</sup></>,
      <>2<sup>6</sup> x 5<sup>4</sup></>,
      <>2<sup>6</sup> x 5<sup>2</sup></>,
      <>10<sup>5</sup></>,
    ],
    correct: 1
  },
  {
    text: <>7<sup>3</sup> x 7<sup>4</sup></>,
    answers: [
      <>7<sup>12</sup></>,
      <>49<sup>7</sup></>,
      <>7<sup>7</sup></>,
      <>7<sup>1</sup></>,
    ],
    correct: 2
  },
  {
    text: <>(6<sup>2</sup>)<sup>4</sup> x 6</>,
    answers: [
      <>6<sup>9</sup></>,
      <>6<sup>6</sup></>,
      <>6<sup>8</sup></>,
      <>36<sup>4</sup></>,
    ],
    correct: 0
  },
  {
    text: <>(2<sup>4</sup> x 3<sup>3</sup>) x (2<sup>2</sup> x 3<sup>5</sup>)</>,
    answers: [
      <>2<sup>6</sup> x 3<sup>8</sup></>,
      <>2<sup>8</sup> x 3<sup>15</sup></>,
      <>6<sup>14</sup></>,
      <>2<sup>6</sup> x 3<sup>15</sup></>,
    ],
    correct: 0
  },
  {
    text: <>(4<sup>3</sup>)<sup>2</sup> x 4<sup>2</sup></>,
    answers: [
      <>4<sup>5</sup></>,
      <>4<sup>8</sup></>,
      <>4<sup>12</sup></>,
      <>4<sup>7</sup></>,
    ],
    correct: 1
  },
  {
    text: <>(5<sup>2</sup> x 2<sup>3</sup>)<sup>3</sup></>,
    answers: [
      <>5<sup>6</sup> x 2<sup>9</sup></>,
      <>5<sup>5</sup> x 2<sup>6</sup></>,
      <>10<sup>5</sup></>,
      <>5<sup>6</sup> x 2<sup>6</sup></>,
    ],
    correct: 0
  },
  {
    text: <>(3<sup>2</sup>)<sup>5</sup> x (3<sup>4</sup>)<sup>2</sup></>,
    answers: [
      <>3<sup>18</sup></>,
      <>3<sup>40</sup></>,
      <>9<sup>13</sup></>,
      <>3<sup>13</sup></>,
    ],
    correct: 0
  }
];

export default QuestionList;
