import DefaultLayout from "../components/DefaultLayout";
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-x-4 gap-y-2">
        <div className="row-span-2 col-span-8">
          <NewsCard
            imageUrl="https://cdn.dribbble.com/users/1401331/screenshots/17569793/media/3a9bd9a8557428b20c113bbaa476ecb2.png?compress=1&resize=1000x750&vertical=top"
            height="600px"
            title="Majority of Indonesians unsure about vaccination. survey finds"
            tag="National"
            _content="Indonesia is closing its borders to foreign travelers from all around
        the world tot tho first two weeks of 2021, Foreign Minister Retno
        Marsudi announced on Monday, amid concerns over the discovery of a
        more infectious SARS-CoV-2 variant first detected in the United
        Kingdom"
            duration="11.30 am - 2 min read"
            outset={false}
          />
        </div>
        <div className="col-span-4">
          <NewsCard
            imageUrl="https://cdn.dribbble.com/users/1401331/screenshots/17569793/media/3a9bd9a8557428b20c113bbaa476ecb2.png?compress=1&resize=1000x750&vertical=top"
            height="292px"
            title="Majority of Indonesians unsure about vaccination. survey finds"
            tag="National"
            _content="Indonesia is closing its borders to foreign travelers from all around
        the world tot tho first two weeks of 2021, Foreign Minister Retno
        Marsudi announced on Monday, amid concerns over the discovery of a
        more infectious SARS-CoV-2 variant first detected in the United
        Kingdom"
            _duration="11.30 am - 2 min read"
            outset={false}
          />
        </div>
        <div className="col-span-4">
          <NewsCard
            imageUrl="https://cdn.dribbble.com/users/1401331/screenshots/17569793/media/3a9bd9a8557428b20c113bbaa476ecb2.png?compress=1&resize=1000x750&vertical=top"
            height="292px"
            title="Majority of Indonesians unsure about vaccination. survey finds"
            tag="National"
            _content="Indonesia is closing its borders to foreign travelers from all around
        the world tot tho first two weeks of 2021, Foreign Minister Retno
        Marsudi announced on Monday, amid concerns over the discovery of a
        more infectious SARS-CoV-2 variant first detected in the United
        Kingdom"
            _duration="11.30 am - 2 min read"
            outset={false}
          />
        </div>
      </div>
      <NewsCard
        imageUrl="https://cdn.dribbble.com/users/1401331/screenshots/17569793/media/3a9bd9a8557428b20c113bbaa476ecb2.png?compress=1&resize=1000x750&vertical=top"
        height="500px"
        title="Majority of Indonesians unsure about vaccination. survey finds"
        tag="National"
        content="Indonesia is closing its borders to foreign travelers from all around
        the world tot tho first two weeks of 2021, Foreign Minister Retno
        Marsudi announced on Monday, amid concerns over the discovery of a
        more infectious SARS-CoV-2 variant first detected in the United
        Kingdom"
        duration="11.30 am - 2 min read"
        // outset={false}
      />
    </DefaultLayout>
  );
}
