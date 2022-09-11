import {fireEvent, render} from '@testing-library/react';

import VoteNow from "../../components/VoteNow";

const renderComponent = ({ isVoteSaved }) => {
  const handleSaveVote = () => {
    isVoteSaved = true;
    mountComponent();
  };

  const setIsVoteSaved = value => {
    isVoteSaved = value;
    mountComponent();
  }

  let componentTestProps;

  const mountComponent = () => {
    componentTestProps?.unmount();

    const { queryByTestId, getByTestId, unmount } = render(
      <VoteNow
        idVote={1}
        handleSaveVote={handleSaveVote}
        setIsVoteSaved={setIsVoteSaved}
        isVoteSaved={isVoteSaved}
      />,
    );

    componentTestProps = { queryByTestId, getByTestId, unmount };
  };

  mountComponent();
  return componentTestProps;
}

describe('Testing VoteNow Component', () => {
  test('Clicking the thumbs up or thumbs down button should enable the Vote Now button', () => {
    const { queryByTestId, getByTestId, unmount } = renderComponent({ isVoteSaved: false });
  
    expect(queryByTestId('btn-vote-now')).toBeTruthy();
  
    fireEvent.click(getByTestId('btn-vote-positive'));
    fireEvent.click(getByTestId('btn-vote-negative'));

    expect(queryByTestId('btn-vote-now')).toBeEnabled();

    unmount();
  });

  test('The Vote Again button should render when isVotedSaved = true', () => {
    const { queryByTestId, getByTestId, unmount } = renderComponent({ isVoteSaved: true });
  
    expect(queryByTestId('btn-vote-again')).toBeTruthy();

    fireEvent.click(getByTestId('btn-vote-again'));

    unmount();
  });

  test('Vote Now button should change the text after click', () => {
    const { queryByTestId, getByTestId, unmount } = renderComponent({ isVoteSaved: false });
  
    expect(queryByTestId('btn-vote-now')).toBeTruthy();
  
    fireEvent.click(getByTestId('btn-vote-positive'));
    fireEvent.click(getByTestId('btn-vote-now'));

    expect(queryByTestId('btn-vote-again')).toBeTruthy();

    unmount();
  });
});