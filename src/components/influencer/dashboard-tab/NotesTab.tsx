const mockData = [
  {
    date: "Today",
    data: [
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
    ],
  },
  {
    date: "Yesterday",
    data: [
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
    ],
  },
  {
    date: "21 Oct, 2021",
    data: [
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
      {
        title: "Texatrove India",
        description:
          "Montes, risus porttitor nullam morbi ornare. Integer lorem aliquet rhoncus, leo tincidunt sit eu. Aliquet faucibus ut non mollis egestas mi. Risus faucibus tortor, nulla felis, elit amet blandit dictum aliquet. Nisi, vel aliquet et metus enim, pellentesque.",
      },
    ],
  },
];

const NotesTab = () => {
  return (
    <div>
      <p className="tw-font-bold tw-text-3xl tw-text-secondary-color tw-mb-10">
        Notes
      </p>
      <div>
        {mockData.map((data) => (
          <div>
            <p className="tw-mb-3 tw-font-lato tw-text-secondary-color">
              {data.date}
            </p>
            <div className="tw-mb-7">
              {data.data.map((d) => (
                <div className="tw-shadow-card tw-rounded-lg tw-mb-5 tw-p-7">
                  <p className="tw-font-medium tw-text-lg tw-mb-3">{d.title}</p>
                  <p className="tw-font-lato tw-text-secondary-color">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesTab;
