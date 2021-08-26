import { useNavigation } from 'shared/router';
import { ContentItemProvider } from 'shared/providers';
import { ContentSingle } from 'shared/components';

function getItemId(slug) {
  if (slug) {
    const id = slug.split('-').pop();
    return `MediaContentItem:${id}`;
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

  return <ContentItemProvider Component={ContentSingle} options={options} />;
}
