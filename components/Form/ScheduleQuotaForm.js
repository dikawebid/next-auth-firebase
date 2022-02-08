import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
} from '@chakra-ui/react';

const ScheduleQuotaForm = ({
  schedule,
  isOpen,
  onClose,
  isLoading,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    quota: { value: '', isValid: true },
    reservedQuota: { value: '', isValid: true },
    availableQuota: { value: '', isValid: true },
  });

  useEffect(() => {
    form.quota.value = schedule?.quota ?? '';
    form.reservedQuota.value = schedule?.reserved_quota ?? '';
    form.availableQuota.value = schedule?.available_quota ?? '';
    setForm({ ...form });
  }, [isOpen]);

  const quotaChange = (e) => {
    form.quota.value = e.target.value.toString();
    setForm({ ...form });
  };

  const reservedQuotaChange = (e) => {
    form.reservedQuota.value = e.target.value.toString();
    setForm({ ...form });
  };

  const availableQuotaChange = (e) => {
    form.availableQuota.value = e.target.value.toString();
    setForm({ ...form });
  };

  const submit = () => {
    if (isFormValid()) {
      onSubmit(form);
    }
  };

  const isFormValid = () => {
    let valid = true;

    if (form.quota.value === '') {
      valid = false;
      form.quota.isValid = false;
    } else {
      form.quota.isValid = true;
    }

    if (form.reservedQuota.value === '') {
      valid = false;
      form.reservedQuota.isValid = false;
    } else {
      form.reservedQuota.isValid = true;
    }

    if (form.availableQuota.value === '') {
      valid = false;
      form.availableQuota.isValid = false;
    } else {
      form.availableQuota.isValid = true;
    }

    setForm({ ...form });

    return valid;
  };

  let dates = '';
  if (schedule) {
    dates = `${moment(schedule.start_date).format('DD/MM/YYYY')} - ${moment(
      schedule.end_date
    ).format('DD/MM/YYYY')}`;
  }

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
          Manage Quota for Schedule : {dates}
        </ModalHeader>
        <ModalBody>
          <Flex direction="column">
            <FormControl
              id="input-quota"
              mb="24px"
              isInvalid={!form.quota.isValid}
              isRequired
            >
              <FormLabel ms="4px" fontWeight="normal">
                Quota
              </FormLabel>
              <Input
                width="100%"
                type="number"
                focusBorderColor="primary.300"
                errorBorderColor="red.300"
                value={form.quota.value}
                isInvalid={!form.quota.isValid}
                onChange={quotaChange}
              />
              <FormErrorMessage>quota required</FormErrorMessage>
            </FormControl>

            <FormControl
              id="input-reserved-quota"
              mb="24px"
              isInvalid={!form.reservedQuota.isValid}
              isRequired
            >
              <FormLabel ms="4px" fontWeight="normal">
                Reserved Quota
              </FormLabel>
              <Input
                width="100%"
                type="number"
                focusBorderColor="primary.300"
                errorBorderColor="red.300"
                value={form.reservedQuota.value}
                isInvalid={!form.reservedQuota.isValid}
                onChange={reservedQuotaChange}
              />
              <FormErrorMessage>reserved quota required</FormErrorMessage>
            </FormControl>

            <FormControl
              id="input-available-quota"
              mb="24px"
              isInvalid={!form.availableQuota.isValid}
              isRequired
            >
              <FormLabel ms="4px" fontWeight="normal">
                Available Quota
              </FormLabel>
              <Input
                width="100%"
                type="number"
                focusBorderColor="primary.300"
                errorBorderColor="red.300"
                value={form.availableQuota.value}
                isInvalid={!form.availableQuota.isValid}
                onChange={availableQuotaChange}
              />
              <FormErrorMessage>available quota required</FormErrorMessage>
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

export default ScheduleQuotaForm;
