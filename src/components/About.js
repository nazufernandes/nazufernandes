import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Link,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Avatar
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import Tetherfi from '../assets/images/tetherfi.png';
import Opspl from '../assets/images/opspl.png';
import UniLogo from '../assets/images/aloysius.jpg';
import india from '../assets/images/india.svg';

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width={{
              sm: '4rem',
              md: '14'
            }}
            height={{
              sm: isEducation ? '4rem' : 'auto',
              md: 'auto'
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
              <Text
                display={['block', 'none', 'none', 'none']}
                fontSize={14}
                color={`mode.${colorMode}.career.subtext`}
              >
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'flex', 'flex', 'flex']}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(',').map(skill => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            color="#4299E1"
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

function Certificate({
  title,
  offeredBy,
  certUrl,
  logo,
  colorMode,
  alt,
  isEducation = false
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      
      <Flex justifyContent="space-between">
        <Flex
        as={Link}
        isExternal
        href={certUrl}
        >
          <Image
            rounded="full"
            width={{
              sm: '4rem',
              md: '14'
            }}
            height={{
              sm: isEducation ? '4rem' : 'auto',
              md: 'auto'
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {offeredBy}
            </Heading>
          </Stack>
        </Flex>
      </Flex>          
    </Box>
  );
}


const About = () => {
  const { colorMode } = useColorMode();
  const companies = [
    {
      title: 'Tetherfi',
      alt: 'PS image',
      role: 'Trainee Software Engineer',
      skills: 'C#, SQL Server, .Net',
      period: '2021 - Present',
      logo: Tetherfi
    },
    {
      title: 'Online Productivity Solutions Pvt. Ltd.',
      alt: 'BT image',
      role: 'Jr. Software Engineer',
      skills: 'C#, SQL Server, .Net, WebAPI',
      period: '2021 - 2021',
      logo: Opspl
    },
    {
      title: 'Online Productivity Solutions Pvt. Ltd.',
      alt: 'BT image',
      role: 'Intern',
      skills: 'C#, SQL Server, .Net, WebAPI',
      period: '2021 - 2021',
      logo: Opspl
    }
  ];

  const certifications = [
    {
      title: 'Crash Course on Python',
      alt: 'PS image',
      offeredBy :'Google',
      certUrl :'https://www.coursera.org/account/accomplishments/verify/394B3GHTKKHR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1644451200&v=beta&t=9EObuguIpBQf3ooHmI7mpmAhIkIyL8Oj1PrdCLTd1fs',
    },
    {
      title: 'AWS Cloud Practitioner Essentials (Second Edition)',
      alt: 'PS image',
      offeredBy :'Amazon Web Services (AWS)',
      certUrl :'https://www.aws.training/SignIn?returnUrl=%2fTranscript%2fCompletionCertificateHtml%3ftranscriptid%3dM9MTDhnuWUWcMPia9Nny_A2',
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGDg9Y7HCAP_g/company-logo_100_100/0/1633027000701?e=1644451200&v=beta&t=6O-3Kx-DC50lBkxzpBtoAyBIWYGdmLcjVS_PBBT9sho',
    },
    {
      title: 'Elements Of AI',
      alt: 'PS image',
      offeredBy :'University of Helsinki',
      certUrl :'https://certificates.mooc.fi/validate/kwyc91csic',
      logo: 'https://media-exp1.licdn.com/dms/image/C560BAQHZQ2B3IQO9xg/company-logo_200_200/0/1519856264083?e=1644451200&v=beta&t=YReH0mJsCvx9hb5f7PT8ymmbx_63oLAHDDNEYVY-xWI',
    }
  ];
  
  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      {/* Bio */}
      <Stack spacing={2} marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`} display="flex">
          Hi, I'm Nazu Fernandes{' '}
        </Heading>
        <Stack as="flex" flexDirection="row" alignItems="center">
          <Box>
            <Text color={`mode.${colorMode}.subtext`}>
              I am a Software Developer, from Goa, India.
            </Text>
          </Box>
          <Box mb="3">
            <Avatar
              ml="2"
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="Pakistan Flag"
              src={india}
            />
          </Box>
        </Stack>
        <Text color={`mode.${colorMode}.subtext`}>
          Tech enthusiast and a learner.
        </Text>
      </Stack>

      {/* Skills */}
      <Stack marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
        <Stack
          padding={4}
          borderLeft="4px solid"
          borderColor={`mode.${colorMode}.skills.border`}
          color={`mode.${colorMode}.career.subtext`}
          _hover={{ shadow: 'md' }}
          backgroundColor={`mode.${colorMode}.cardBG`}
          rounded="md"
          fontWeight="bold"
        >
          <Text>C#, Python, Java</Text>
          <Text>MySQL, SQL SERVER, MongoDB, Firebase</Text>
          <Text>Github, Git, Google Cloud, Android, Web APIs</Text>       
        </Stack>
      </Stack>

      {/* Career */}
      <Stack spacing={4} marginBottom={6}>
        <Heading color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Career
            </Text>
            <Stack pl={3}>
              <Box
                as={BsFillBriefcaseFill}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        {companies.map((company, index) => (
          <Company
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
            colorMode={colorMode}
          />
        ))}
      </Stack>
      
      {/* Education */}
      <Stack spacing={4} marginBottom={6}>
        <Heading>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Education
            </Text>
            <Stack pl={2}>
              <Box
                as={FaGraduationCap}
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="AIMIT - St Aloysius Institute of Management and IT"
          alt="Nuces image"
          role="Masters's of Computer Application"
          skills="Python, Java, C#, C, C++, Data Structures, Algorithms"
          period="2018 - 2021"
          logo={UniLogo}
          colorMode={colorMode}
          isEducation={true}
        />
      </Stack> 

        {/* Certificates */}
      <Stack spacing={4} marginBottom={6}>
        <Heading color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Certifications
            </Text>
            <Stack pl={3}>
              <Box
                as={FaCertificate}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        {certifications.map((certificate, index) => (
          <Certificate
            key={index}
            title={certificate.title}
            offeredBy={certificate.offeredBy}
            logo={certificate.logo}
            certUrl={certificate.certUrl}
            colorMode={colorMode}
          />
        ))}
      </Stack>     
    </Stack>
  );
};

export default About;
