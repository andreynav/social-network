import {useTranslation} from "react-i18next";

export const useUserData = (data) => {
    const {t} = useTranslation()

    return [
        {itemName: t("users.fullName"), itemData: data.name},
        {itemName: t("users.status"), itemData: data.status},
        {itemName: t("users.id"), itemData: data.id},
        {itemName: t("users.city"), itemData: data.city},
    ]
}