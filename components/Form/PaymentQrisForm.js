import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import InputFile from '../Input/InputFile';
import InputImagePreview from '../Input/InputImagePreview';

const PaymentQrisForm = ({
  mode = 'add',
  paymentMethod,
  isLoading = false,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    image: {
      file: null,
      blob: null,
      filename: '',
      isValid: true,
    },
    name: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    },
    qrImage: {
      file: null,
      blob: null,
      filename: '',
      isValid: true,
    },
    status: {
      value: 'inactive',
      isValid: true,
    },
  });

  useEffect(() => {
    if (mode === 'edit' && paymentMethod) {
      setInitdata(paymentMethod);
    }
  }, [mode, paymentMethod]);

  const setInitdata = (paymentMethod) => {
    if (paymentMethod.thumbnail && paymentMethod.thumbnail.file_url) {
      form.image.blob = paymentMethod.thumbnail.file_url;
    }

    if (paymentMethod.qris && paymentMethod.qris.file_url) {
      form.qrImage.blob = paymentMethod.qris.file_url;
    }

    form.name.value = paymentMethod.name;
    form.description.value = paymentMethod.description;
    form.status.value = paymentMethod.status;

    setForm({ ...form });
  };

  const imageChange = (e) => {
    if (e.target.files) {
      let file = e.target.files[0];
      if (file) {
        form.image.file = file;
        form.image.blob = URL.createObjectURL(file);
        form.image.filename = file.name;
        setForm({ ...form });
      }
    }
  };

  const nameChange = (e) => {
    form.name.value = e.target.value.toString();
    setForm({ ...form });
  };

  const descriptionChange = (e) => {
    form.description.value = e.target.value.toString();
    setForm({ ...form });
  };

  const qrImageChange = (e) => {
    if (e.target.files) {
      let file = e.target.files[0];
      if (file) {
        form.qrImage.file = file;
        form.qrImage.blob = URL.createObjectURL(file);
        form.qrImage.filename = file.name;
        setForm({ ...form });
      }
    }
  };

  const statusChange = (e) => {
    form.status.value = e.target.value.toString();
    setForm({ ...form });
  };

  const submit = () => {
    if (isFormValid()) {
      onSubmit(form);
    }
  };

  const isFormValid = () => {
    let valid = true;

    if (mode === 'add') {
      if (form.image.file === null) {
        valid = false;
        form.image.isValid = false;
      } else {
        form.image.isValid = true;
      }
    }

    if (form.name.value === '') {
      valid = false;
      form.name.isValid = false;
    } else {
      form.name.isValid = true;
    }

    if (form.description.value === '') {
      valid = false;
      form.description.isValid = false;
    } else {
      form.description.isValid = true;
    }

    if (form.status.value === '') {
      valid = false;
      form.status.isValid = false;
    } else {
      form.status.isValid = true;
    }

    if (mode === 'add') {
      if (form.qrImage.file === null) {
        valid = false;
        form.qrImage.isValid = false;
      } else {
        form.qrImage.isValid = true;
      }
    }

    setForm({ ...form });

    return valid;
  };

  return (
    <Card>
      <CardBody h="100%" w="100%">
        <Flex width="100%" flexDirection="column">
          <FormControl
            id="input-image"
            mb="46px"
            width="100px"
            isInvalid={!form.image.isValid}
            isRequired
          >
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Thumbnail
            </FormLabel>

            <InputImagePreview
              src={form.image.blob}
              objectFit="contain"
              w="100px"
              h="100px"
              imgW="100%"
              imgH="100%"
              mb="8px"
            />

            <InputFile accept=".png, .jpeg" onChange={imageChange}>
              <Button
                size="sm"
                width="100px"
                colorScheme="secondary"
                fontSize="12px"
              >
                Upload
              </Button>
            </InputFile>

            <FormErrorMessage>image required</FormErrorMessage>
          </FormControl>

          <FormControl
            id="input-name"
            mb="24px"
            isInvalid={!form.name.isValid}
            isRequired
          >
            <FormLabel ms="4px" fontWeight="normal">
              Name
            </FormLabel>
            <Input
              width="100%"
              type="text"
              placeholder=""
              focusBorderColor="primary.300"
              errorBorderColor="red.300"
              value={form.name.value}
              isInvalid={!form.name.isValid}
              onChange={nameChange}
            />
            <FormErrorMessage>name required</FormErrorMessage>
          </FormControl>

          <FormControl
            id="input-description"
            mb="24px"
            isInvalid={!form.description.isValid}
            isRequired
          >
            <FormLabel ms="4px" fontWeight="normal">
              Description
            </FormLabel>
            <Textarea
              width="100%"
              rows="5"
              type="text"
              placeholder=""
              size="lg"
              fontSize="md"
              focusBorderColor="primary.300"
              errorBorderColor="red.300"
              value={form.description.value}
              isInvalid={!form.description.isValid}
              onChange={descriptionChange}
            />
            <FormErrorMessage>description required</FormErrorMessage>
          </FormControl>

          <FormControl
            id="input-qr-image"
            mb="46px"
            width="240px"
            isInvalid={!form.qrImage.isValid}
            isRequired
          >
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              QR Code Image
            </FormLabel>

            <InputImagePreview
              src={form.qrImage.blob}
              objectFit="contain"
              w="240px"
              h="240px"
              imgW="100%"
              imgH="100%"
              mb="8px"
            />

            <InputFile accept=".png, .jpeg" onChange={qrImageChange}>
              <Button
                size="sm"
                width="240px"
                colorScheme="secondary"
                fontSize="12px"
              >
                Upload
              </Button>
            </InputFile>

            <FormErrorMessage>qr image required</FormErrorMessage>
          </FormControl>

          <FormControl
            id="input-status"
            mt="8px"
            mb="24px"
            isInvalid={!form.status.isValid}
            isRequired
          >
            <FormLabel ms="4px" fontWeight="normal">
              Status
            </FormLabel>
            <Select
              backgroundColor="white"
              value={form.status.value}
              onChange={statusChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
            <FormErrorMessage>status required</FormErrorMessage>
          </FormControl>

          <Box>
            <Button
              type="submit"
              colorScheme="primary"
              fontWeight="bold"
              fontSize="14px"
              w="220px"
              h="45px"
              mt="24px"
              float="right"
              isLoading={isLoading}
              onClick={submit}
            >
              Save
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentQrisForm;
