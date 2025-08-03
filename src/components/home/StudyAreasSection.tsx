"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import StudyCards from "./StudyCards";
import { StudyAreaSectionDto } from "@/types/StudyAreaSection.dto";
import { getStudyAreasClient } from "@/service";
import { useLocale, useTranslations } from "use-intl";

const StudyAreasSection: React.FC<StudyAreaSectionDto> = ({ model, page }) => {
  const [study, setStudy] = useState<any[]>([]);
  const [allStudies, setAllStudies] = useState<any[]>([]);
  const [count, setCount] = useState(1);
  const t = useTranslations("home");
  const locale = useLocale();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getStudyAreasClient(locale, model);
      if (!isMounted) return;
      setAllStudies(data);
      setStudy(data.slice(0, 8));
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setStudy(allStudies.slice(0, count * 8));
  }, [count, allStudies]);

  const showLoadMore = allStudies.length > study.length;
  const isCorporate = page === "corporate";
  const titleColor = isCorporate ? "text-white" : "text-black";
  const iconStroke = isCorporate ? "#fff" : "#141414";

  return (
    <div>
      <h2 className={`font-bold leading-12 text-4xl ${titleColor}`}>
        {t("studyOfArea.title")}
      </h2>

      <div className="mt-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {study.map((item, index) => (
          <StudyCards
            key={item.id || index}
            item={item}
            index={index}
            model={model}
            theme={isCorporate}
          />
        ))}
      </div>

      {showLoadMore && (
        <div className="mt-15 w-full flex justify-center">
          <div className="w-35 h-12">
            <Button theme={isCorporate} flag={true} link="" onClick={() => setCount(count + 1)}>
              <div className="h-12 w-38 flex items-center justify-center gap-2">
                {t("studyOfArea.button")}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 10L12.5 14L16.5 10"
                    stroke={iconStroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyAreasSection;
