import { render } from '@testing-library/react';

import BarRulings from "../../components/BarRulings";

const renderComponent = ({ votes }) => {
  const { queryByTestId, unmount } = render(
    <BarRulings votes={votes} />,
  );

  return { queryByTestId, unmount };
}

describe('Testing BarRulings component', () => {
  test('The percentage calculation should be, Positive: 50.0% Negative: 50.0%', () => {
    const votes = {
      positive: 100,
      negative: 100
    };

    const { queryByTestId, unmount } = renderComponent({ votes });

    expect(queryByTestId('bar-rulings-percent-positive')).toHaveTextContent('50.0%');

    expect(queryByTestId('bar-rulings-percent-negative')).toHaveTextContent('50.0%');

    unmount();
  });

  test('The percentage calculation should be, Positive: 72.6% Negative: 27.4%', () => {
    const votes = {
      positive: 3232,
      negative: 1221
    };

    const { queryByTestId, unmount } = renderComponent({ votes });

    expect(queryByTestId('bar-rulings-percent-positive')).toHaveTextContent('72.6%');

    expect(queryByTestId('bar-rulings-percent-negative')).toHaveTextContent('27.4%');

    unmount();
  });

  test('The percentage calculation should be, Positive: 34.1% Negative: 50%', () => {
    const votes = {
      positive: 321,
      negative: 621
    };

    const { queryByTestId, unmount } = renderComponent({ votes });

    expect(queryByTestId('bar-rulings-percent-positive')).toHaveTextContent('34.1%');

    expect(queryByTestId('bar-rulings-percent-negative')).toHaveTextContent('65.9%');

    unmount();
  });
});