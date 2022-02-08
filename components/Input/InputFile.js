import { useRef } from 'react';
import { InputGroup } from '@chakra-ui/react';

const InputFile = ({ onChange, accept, multiple, children, ...rest }) => {
  const inputRef = useRef();
  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={inputRef}
        onChange={onChange}
      />
      <>{children}</>
    </InputGroup>
  );
};

export default InputFile;
