import { Button, InputField, Label } from 'components/index'
import { FormEventHandler } from 'react'
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { ItemData } from 'types/components'
import { ProfileSchemeDataT } from 'utils/getProfileSchemeData'

type FormProfileInfoT = {
  onSubmit: FormEventHandler<HTMLFormElement>
  register: UseFormRegister<FieldValues>
  registerCheckbox: UseFormRegisterReturn<'lookingForAJob'>
  errors: {
    server?: {
      message?: string
    }
  }
  profileData: ProfileSchemeDataT
  onClearErrors: () => void
}

export const FormProfileInfo = ({
  onSubmit,
  register,
  registerCheckbox,
  errors,
  profileData,
  onClearErrors
}: FormProfileInfoT) => {
  const profileItems = profileData.map((item) => {
    const error = errors?.server
      ?.message!.split(' ')[1]!
      .split(')')[0]!
      .toLowerCase()
    const isPutError = error === item.inputName.toLowerCase()

    return (
      <ItemWrapper key={item.inputName}>
        {item.itemType === 'text' && (
          <InputField
            name={item.inputName}
            label={item.itemName}
            type={item.itemType}
            register={register}
            defaultValue={item.itemData as ItemData}
            errors={errors}
            isPutError={isPutError}
            onClearErrors={onClearErrors}
            height="22"
          />
        )}
        {item.itemType === 'checkbox' && (
          <LoginCheckboxWrapper>
            <Label htmlFor={item.inputName} fontSize="10px">
              {item.itemName}
            </Label>
            <LoginCheckbox
              type={item.itemType}
              defaultChecked={item.itemData as boolean}
              {...registerCheckbox}
              name={item.inputName}
            />
          </LoginCheckboxWrapper>
        )}
      </ItemWrapper>
    )
  })

  const { t } = useTranslation()

  return (
    <form onSubmit={onSubmit}>
      {profileItems}
      <Button fontSize="16px">{t('profile.save')}</Button>
    </form>
  )
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
`

const LoginCheckboxWrapper = styled.div`
  display: grid;
  grid-template-rows: 16px auto 16px;
`

const LoginCheckbox = styled.input`
  align-content: center;
  height: 35px;
  width: 20px;
  justify-self: center;
  cursor: pointer;
`
