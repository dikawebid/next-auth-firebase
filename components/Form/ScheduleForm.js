import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
} from '@chakra-ui/react';

const ScheduleForm = ({
  mode,
  schedule,
  isOpen,
  onClose,
  isLoading,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    startDate: { value: '', isValid: true },
    endDate: { value: '', isValid: true },
    status: { value: 'inactive', isValid: true },
  });

  useEffect(() => {
    if (mode === 'create') {
      form.startDate.value = '';
      form.endDate.value = '';
      form.status.value = 'inactive';
      setForm({ ...form });
    } else if (mode === 'edit') {
      form.startDate.value = moment(schedule.start_date).format('YYYY-MM-DD');
      form.endDate.value = moment(schedule.end_date).format('YYYY-MM-DD');
      form.status.value = schedule.status;
      setForm({ ...form });
    }
  }, [isOpen]);

  const startDateChange = (e) => {
    form.startDate.value = e.target.value.toString();
    setForm({ ...form });
  };

  const endDateChange = (e) => {
    form.endDate.value = e.target.value.toString();
    setForm({ ...form });
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

    if (form.startDate.value === '') {
      valid = false;
      form.startDate.isValid = false;
    } else {
      form.startDate.isValid = true;
    }

    if (form.endDate.value === '') {
      valid = false;
      form.endDate.isValid = false;
    } else {
      form.endDate.isValid = true;
    }

    if (form.status.value === '') {
      valid = false;
      form.status.isValid = false;
    } else {
      form.status.isValid = true;
    }

    setForm({ ...form });

    return valid;
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="14px">
          {mode === 'create' ? 'Create New ' : 'Edit '} Schedule
        </ModalHeader>
        <ModalBody>
          <Flex direction="column">
            <FormControl
              id="input-start-date"
              mb="24px"
              isInvalid={!form.startDate.isValid}
              isRequired
            >
              <FormLabel ms="4px" fontWeight="normal">
                Start Date
              </FormLabel>
              <Input
                width="100%"
                type="date"
                focusBorderColor="primary.300"
                errorBorderColor="red.300"
                value={form.startDate.value}
                isInvalid={!form.startDate.isValid}
                onChange={startDateChange}
              />
              <FormErrorMessage>start date required</FormErrorMessage>
            </FormControl>

            <FormControl
              id="input-end-date"
              mb="24px"
              isInvalid={!form.endDate.isValid}
              isRequired
            >
              <FormLabel ms="4px" fontWeight="normal">
                End Date
              </FormLabel>
              <Input
                width="100%"
                type="date"
                focusBorderColor="primary.300"
                errorBorderColor="red.300"
                value={form.endDate.value}
                isInvalid={!form.endDate.isValid}
                onChange={endDateChange}
              />
              <FormErrorMessage>end date required</FormErrorMessage>
            </FormControl>

            <FormControl
              id="input-status"
              mt="8px"
              mb="24px"
              value={form.status.value}
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
          </Flex>
        </ModalBody>

        <ModalFooter>
          <HStack spacing="8px">
            <Button
              width="120px"
              size="sm"
              variant="outline"
              colorScheme="gray"
              disabled={isLoading}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              width="120px"
              size="sm"
              colorScheme="primary"
              isLoading={isLoading}
              onClick={submit}
            >
              Save
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleForm;
