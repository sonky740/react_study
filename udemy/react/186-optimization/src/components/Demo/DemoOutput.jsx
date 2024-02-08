import { memo } from 'react';
import MyParagraph from './MyParagraph';

function DemoOutput({ show }) {
  console.log('DemoOutput RUNNING');
  return <MyParagraph show={show} />;
}

export default memo(DemoOutput);
