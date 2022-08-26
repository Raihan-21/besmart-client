import useFetch from "../../hooks/useFetch";
import styles from "../../assets/styles/User.module.scss";

const Dashboard = () => {
  const [data, isLoading] = useFetch("/api/berita");
  return (
    <div className={`text-left ${styles.userContainer}`}>
      <h3>Dashboard</h3>
      <div class="space-y-4">
        {!isLoading &&
          data.map((item, i) => (
            <div key={i}>
              <h2>{item.judul}</h2>
              <p className="text-gray">
                {item.tanggal_buat.split("-").reverse().join("-")}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                className={styles.newsContent}
              />
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
