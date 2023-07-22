import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import { getLocal, setLocal } from "../util/Utility";

export const useResume = (): [Resume, (resume: Resume) => void] => {
  const [resume, setResume] = useState<Resume>(new Resume());
  useEffect(() => {
    setResume(getLocalResume());
  }, []);
  const updateStateAndLocalResume = (resume: Resume) => {
    setResume(resume);
    setLocalResume(resume);
  };
  return [resume, updateStateAndLocalResume];
};

const getLocalResume = (): Resume => {
  return JSON.parse(getLocal("resume")!);
};

const setLocalResume = (resume: Resume) => {
  setLocal("resume", JSON.stringify(resume));
};
