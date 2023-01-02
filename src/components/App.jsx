import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const goodEl = this.state.good;
    return Math.round((goodEl * 100) / totalFeedback);
  }

  onLeaveFeedback(e) {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
}

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();


    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback.bind(this)} />
        </Section>

        <Section title="Statistics">
          {
            totalFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        </Section>
      </>
    );
  }

};
