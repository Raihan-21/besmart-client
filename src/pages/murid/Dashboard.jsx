import useFetch from "../../hooks/useFetch";
import styles from "../../assets/styles/Murid.module.scss";

const Dashboard = () => {
  const [data, isLoading] = useFetch("/berita");
  return (
    <div className={`text-left ${styles.muridContainer}`}>
      <h3>Dashboard</h3>
      <div>
        {!isLoading &&
          data.map((item, i) => (
            <div key={i}>
              <h4>{item.judul}</h4>
              <p className="text-gray">
                {item.tanggal_buat.split("-").reverse().join("-")}
              </p>
              <p dangerouslySetInnerHTML={{ __html: item.deskripsi }} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
