import { DataMapProps } from "@/components/templates/DataMapGrid";

/*
Year by year
2015 - java, postgres, linux, jira
2016 - java, postgres, linux, jira, html, css, javascript, php, mysql, oracle, python
2017 - java, postgres, linux, hibernate, jsf, html, css, javascript, jquery, wildfly, tomcat, oracle 
2018 - java, postgres, linux, hibernate, jsf, html, css, javascript, react, wildfly, tomcat, IBM Websphere, IBM ODM, IBM Integration Bus, oracle, JBoss Drools (kie)
2019 - java, postgres, linux, Spring, hibernate, html, css, javascript, react, wildfly, tomcat, IBM ODM, IBM Integration Bus, Kafka, Docker, oracle, JBoss Drools (kie)
2020 - html, css, javascript, Salesforce Sales cloud, Salesforce Service cloud, Salesforce Apex, Salesforce LWC, Salesforce Visualforce
2021 - java, postgres, linux, Spring, html, css, javascript, Salesforce Sales cloud, Salesforce Service cloud, Salesforce Apex, Salesforce LWC, Salesforce Visualforce
2022 - IBM Cloud Pak for Business Automation, Red Hat Openshift Container Platform, Kubernetes, Rancher
2023 - RedHat Kogito
2024 - Salesforce Sales cloud, Salesforce Service cloud, Salesforce Apex, Salesforce LWC
2025 - python, Salesforce Sales cloud, Salesforce Service cloud, Salesforce Apex, Salesforce LWC
*/
interface TechnologyKnown {
    level: KnowledgeLevel;
    logoPath: string;
    label: string;

}

enum KnowledgeLevel {
    Conceptual = 1,
    Practical1Year = 2,
    Practical3Years = 3,
    Practical5Years = 4,
    Expert = 5,
}

const getLevelDetails = (level: KnowledgeLevel) => {
    switch (level) {
        case KnowledgeLevel.Conceptual:
            return { sort: 1, loader: 20, tag: 'Conceptual', bgClass: 'bg-gray-400', textClass: 'text-gray-800', };
        case KnowledgeLevel.Practical1Year:
            return { sort: 2, loader: 40, tag: '< 1 Year Practical', bgClass: 'bg-tertiary-lighter1', textClass: 'text-gray-900' };
        case KnowledgeLevel.Practical3Years:
            return { sort: 3, loader: 60, tag: '< 3 Years Practical', bgClass: 'bg-secondary-lighter2', textClass: 'text-gray-900' };
        case KnowledgeLevel.Practical5Years:
            return { sort: 4, loader: 80, tag: '< 5 Years Practical', bgClass: 'bg-primary-lighter1', textClass: 'text-gray-900' };
        case KnowledgeLevel.Expert:
            return { sort: 5, loader: 100, tag: '5+ Years Expert', bgClass: 'bg-success', textClass: 'text-gray-900' };
        default:
            return { sort: 6, loader: 0, tag: 'Unknown', bgClass: 'bg-gray-500', textClass: 'text-white' };
    }
}

const technologiesKnown: TechnologyKnown[] = [
    {
        logoPath: '/assets/images/tech/technologies_logo/oracle.svg',
        label: 'Java',
        level: KnowledgeLevel.Expert
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/postgres.svg',
        label: 'Postgres',
        level: KnowledgeLevel.Expert
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/oracle.svg',
        label: 'Oracle DB',
        level: KnowledgeLevel.Practical5Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/linux.png',
        label: 'Linux',
        level: KnowledgeLevel.Expert
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/html.svg',
        label: 'HTML',
        level: KnowledgeLevel.Practical5Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/css.svg',
        label: 'CSS',
        level: KnowledgeLevel.Practical5Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/js.svg',
        label: 'Javascript',
        level: KnowledgeLevel.Expert
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/hibernate.svg',
        label: 'Hibernate ORM',
        level: KnowledgeLevel.Practical5Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/oracle.svg',
        label: 'JSF',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/tomcat.svg',
        label: 'Apache Tomcat',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/wildfly.png',
        label: 'JBoss Wildfly',
        level: KnowledgeLevel.Practical5Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/ibm.svg',
        label: 'IBM Websphere',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/ibm.svg',
        label: 'IBM Integration Bus',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/ibm.svg',
        label: 'IBM ODM',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/salesforce.svg',
        label: 'Salesforce Sales cloud',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/salesforce.svg',
        label: 'Salesforce Service cloud',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/salesforce.svg',
        label: 'Salesforce Apex',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/salesforce.svg',
        label: 'Salesforce LWC',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/kafka.svg',
        label: 'Apache Kafka',
        level: KnowledgeLevel.Practical1Year
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/docker.png',
        label: 'Docker',
        level: KnowledgeLevel.Practical1Year
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/react.svg',
        label: 'React',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/drools.png',
        label: 'JBoss Drools',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/spring.svg',
        label: 'Spring',
        level: KnowledgeLevel.Practical3Years
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/redhat.svg',
        label: 'Red Hat Openshift',
        level: KnowledgeLevel.Practical1Year
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/kubernetes.svg',
        label: 'Kubernetes',
        level: KnowledgeLevel.Practical1Year
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/rancher.png',
        label: 'Rancher',
        level: KnowledgeLevel.Practical1Year
    },
    {
        logoPath: '/assets/images/tech/technologies_logo/kogito.png',
        label: 'Kogito',
        level: KnowledgeLevel.Conceptual
    },

]
const generateTechDataMap = (technologiesKnown: TechnologyKnown[]) => {
    const techDataMap: DataMapProps = {
        id: 'techmap',
        header: 'Technology Proficiency Map',
        subtext: 'A precise overview of my technical expertise, quantified by practical experience',
        dataMapContent: [
        ]
    }
    technologiesKnown.forEach(techKnown => {
        let techKnownLevel = getLevelDetails(techKnown.level);
        techDataMap.dataMapContent.push(
            {
                logoPath: techKnown.logoPath,
                sort: techKnownLevel.sort,
                label: techKnown.label,
                loader: techKnownLevel.loader,
                tag: techKnownLevel.tag,
                bgClass: techKnownLevel.bgClass,
                textClass: techKnownLevel.textClass,
            }
        );
    });
    return techDataMap;
}

export const technologyDataMap: DataMapProps = generateTechDataMap(technologiesKnown);

