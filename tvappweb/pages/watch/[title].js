import { useNavigation } from 'shared/router';
import { ContentItemProvider } from 'shared/providers';

import { ContentSingle } from 'shared/components';
import { Box } from 'shared/ui-kit';

function getItemId(slug) {
  if (slug) {
    const id = slug.split('-').pop();
    return `WeekendContentItem:${id}`;
  }

  return null;
}

export default function WatchSingle(props) {
  const router = useNavigation();
  const { title } = router.query;
  const itemId = getItemId(title);

  const options = {
    variables: { id: itemId },
  };

  return (
    <Box py="xxl" flexGrow={1}>
      <ContentItemProvider Component={ContentSingle} options={options} />
    </Box>
  );
}
