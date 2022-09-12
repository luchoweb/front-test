import { render } from '@testing-library/react';
import moment from 'moment/moment';

import CardRuling from '../../components/CardRuling';
import * as peopleJson from '../mocks/ruling.mock.json';

const renderComponent = ({ view }) => {
  const { queryByTestId, getByTestId, unmount } = render(
    <CardRuling ruling={peopleJson} view={view} />,
  );

  return { queryByTestId, getByTestId, unmount };
}

describe('Testing CardRuling component', () => {
  test('HTML Elements should be rendered (name, description, category, last update and buttons)', () => {
    const { queryByTestId, unmount } = renderComponent({ view: 'list' });

    expect(queryByTestId('card-ruling-name')).toHaveTextContent(peopleJson.data.name);
    
    expect(queryByTestId('card-ruling-description')).toHaveTextContent(peopleJson.data.description);
    
    expect(queryByTestId('card-ruling-category')).toHaveTextContent(peopleJson.data.category);
    
    expect(queryByTestId('card-ruling-last-update')).toHaveTextContent(moment(peopleJson.data.lastUpdated).fromNow());

    expect(queryByTestId('btn-vote-positive')).toBeTruthy();

    expect(queryByTestId('btn-vote-negative')).toBeTruthy();

    expect(queryByTestId('btn-vote-now')).toBeTruthy();

    unmount();
  });
});