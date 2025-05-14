"use client";
import { useTranslations } from "next-intl";
import React from "react";

export const formatDateClient: React.FC<string> = (isoDate: string) => {
    const t = useTranslations();

    const date = new Date(isoDate);
    const day = date.getDate();
    const year = date.getFullYear();

    const month = t(`months.${date.getMonth()}`);

    return `${day} ${month} ${year}`;
};