export interface MatricSubjectMeta {
  subject: string;
  available: boolean;
}

export interface MatricStreamMeta {
  key: string;
  label: string;
  subjects: MatricSubjectMeta[];
}

export interface MatricYearMeta {
  year: number;
  streams: MatricStreamMeta[];
}

export const matricExamMetadata: MatricYearMeta[] = [
  {
    year: 2017,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "Physics", available: true },
          { subject: "Chemistry", available: true },
          { subject: "Biology", available: true },
          { subject: "English", available: true },
          { subject: "Scholastic Aptitude Test", available: true },
          { subject: "Civics", available: false },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: false },
          { subject: "History", available: true },
          { subject: "Geography", available: true },
          { subject: "Economics", available: true },
          { subject: "Scholastic Aptitude Test", available: true },
        ],
      },
    ],
  },
  {
    year: 2016,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "Physics", available: true },
          { subject: "Chemistry", available: true },
          { subject: "Biology", available: true },
          { subject: "English", available: true },
          { subject: "Scholastic Aptitude Test", available: true },
          { subject: "Civics", available: false },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: false },
          { subject: "History", available: true },
          { subject: "Geography", available: true },
          { subject: "Economics", available: true },
          { subject: "Scholastic Aptitude Test", available: true },
        ],
      },
    ],
  },
  {
    year: 2015,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "Physics", available: true },
          { subject: "Chemistry", available: true },
          { subject: "Biology", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
          { subject: "History", available: true },
          { subject: "Geography", available: true },
          { subject: "Economics", available: false },
          { subject: "Scholastic Aptitude Test", available: true },
        ],
      },
    ],
  },
  {
    year: 2014,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "Physics", available: true },
          { subject: "Chemistry", available: true },
          { subject: "Biology", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
          { subject: "Scholastic Aptitude Test", available: true },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
          { subject: "History", available: true },
          { subject: "Geography", available: true },
          { subject: "Economics", available: false },
          { subject: "Scholastic Aptitude Test", available: true },
        ],
      },
    ],
  },
  {
    year: 2013,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "Physics", available: true },
          { subject: "Chemistry", available: true },
          { subject: "Biology", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", available: true },
          { subject: "English", available: true },
          { subject: "Civics", available: true },
          { subject: "History", available: false },
          { subject: "Geography", available: false },
          { subject: "Economics", available: false },
        ],
      },
    ],
  },
];

export const getMatricYearsMeta = () => matricExamMetadata.map((exam) => exam.year);

export const getMatricStreamsForYearMeta = (year: number) =>
  matricExamMetadata.find((exam) => exam.year === year)?.streams ?? [];

export const getMatricSubjectsForYearMeta = (year: number, stream: string) =>
  matricExamMetadata
    .find((exam) => exam.year === year)
    ?.streams.find((item) => item.key === stream)
    ?.subjects.filter((subject) => subject.available) ?? [];
