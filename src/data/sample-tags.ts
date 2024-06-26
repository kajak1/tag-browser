import type { StackExchangeWrapper, TagRaw } from "../shared.types";

export function getFakePage(page: number): StackExchangeWrapper<TagRaw> | undefined {
	if (page <= 0 || page > pages.length) return;

	return structuredClone(pages[page - 1]);
}

const page1: StackExchangeWrapper<TagRaw> = {
	items: [
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2528688,
			name: "javascript",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2191948,
			name: "python",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1917215,
			name: "java",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1614903,
			name: "c#",
		},
		{
			collectives: [
				{
					tags: ["php"],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective where developers working with PHP can learn and connect about the open source scripting language.",
					link: "/collectives/php",
					name: "PHP",
					slug: "php",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1464392,
			name: "php",
		},
		{
			collectives: [
				{
					tags: ["android", "ios"],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
					link: "/collectives/mobile-dev",
					name: "Mobile Development",
					slug: "mobile-dev",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1417155,
			name: "android",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1187301,
			name: "html",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1034837,
			name: "jquery",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 806685,
			name: "c++",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 804170,
			name: "css",
		},
		{
			collectives: [
				{
					tags: ["android", "ios"],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
					link: "/collectives/mobile-dev",
					name: "Mobile Development",
					slug: "mobile-dev",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 687217,
			name: "ios",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 670688,
			name: "sql",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 662018,
			name: "mysql",
		},
		{
			collectives: [
				{
					tags: [
						"tidyverse",
						"knitr",
						"shinydashboard",
						"plyr",
						"rstudio",
						"stringr",
						"forcats",
						"purrr",
						"zoo",
						"rvest",
						"tidyr",
						"shiny",
						"lubridate",
						"readr",
						"dplyr",
						"dtplyr",
						"quantmod",
						"r-package",
						"data.table",
						"rlang",
						"shinyapps",
						"r",
						"r-caret",
						"r-raster",
						"ggplot2",
						"shiny-server",
						"tibble",
					],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective where data scientists and AI researchers gather to find, share, and learn about R and other subtags like knitr and dplyr.",
					link: "/collectives/r-language",
					name: "R Language",
					slug: "r-language",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 505454,
			name: "r",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 476544,
			name: "reactjs",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 471965,
			name: "node.js",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 416676,
			name: "arrays",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 403884,
			name: "c",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 374626,
			name: "asp.net",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 360321,
			name: "json",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 343618,
			name: "python-3.x",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 338047,
			name: "ruby-on-rails",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 337836,
			name: ".net",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 334490,
			name: "sql-server",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 333346,
			name: "swift",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 311780,
			name: "django",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 304038,
			name: "angular",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 292331,
			name: "objective-c",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 286604,
			name: "pandas",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 286461,
			name: "excel",
		},
	],
	has_more: true,
	quota_max: 300,
	quota_remaining: 291,
};

const page2: StackExchangeWrapper<TagRaw> = {
	items: [
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 262769,
			name: "angularjs",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 260206,
			name: "regex",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 229606,
			name: "typescript",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 229041,
			name: "ruby",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 227466,
			name: "linux",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 222023,
			name: "ajax",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 220725,
			name: "iphone",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 214665,
			name: "xml",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 214046,
			name: "vba",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 211334,
			name: "laravel",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 211070,
			name: "spring",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 201269,
			name: "asp.net-mvc",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 195114,
			name: "database",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 192331,
			name: "wordpress",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 184434,
			name: "string",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 176118,
			name: "flutter",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 175906,
			name: "mongodb",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 175829,
			name: "postgresql",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 169616,
			name: "wpf",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 168698,
			name: "windows",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 159627,
			name: "xcode",
		},
		{
			collectives: [
				{
					tags: [
						"amazon-ec2-spot-market",
						"amazon-redshift",
						"amazon-mq",
						"aws-backup",
						"amazon-sagemaker-compilers",
						"aws-elemental",
						"aws-ssm",
						"aws-appstream",
						"aws-sdk-ios",
						"aws-code-deploy",
						"amazon-gamelift",
						"aws-batch",
						"aws-storage-gateway",
						"amazon-kinesis-firehose",
						"aws-device-farm",
						"amazon-web-services",
						"amazon-workmail",
						"aws-parameter-store",
						"aws-sam",
						"aws-codebuild",
						"aws-sdk-js",
						"aws-pinpoint",
						"alexa-smart-home-skill",
						"aws-mediatailor",
						"amazon-inspector",
						"amazon-rds",
						"aws-fis",
						"aws-lambda-edge",
						"aws-secrets-manager",
						"aws-sdk-nodejs",
						"amazon-iam",
						"aws-codecommit",
						"amazon-cloudwatch",
						"aws-appsync",
						"amazon-kinesis-video-streams",
						"aws-event-bridge",
						"aws-iot-greengrass",
						"aws-snowball",
						"amazon-s3-select",
						"aws-sdk-ruby",
						"alexa-sdk-nodejs",
						"aws-global-accelerator",
						"aws-iot-analytics",
						"aws-msk",
						"alexa-sdk-python",
						"alexa-smapi",
						"amazon-kms",
						"aws-lake-formation",
						"aws-chatbot",
						"amazon-glacier",
						"amazon-honeycode",
						"aws-sdk-java",
						"aws-iot-core",
						"aws-sam-cli",
						"amazon-dynamodb",
						"aws-sdk-net",
						"amazon-workspaces",
						"amazon-route53",
						"aws-glue",
						"amazon-vpc",
						"amazon-translate",
						"aws-cloudformation",
						"aws-app-config",
						"aws-control-tower",
						"amazon-data-pipeline",
						"aws-private-link",
						"amazon-polly",
						"aws-sdk-go-v2",
						"amazon-kinesis",
						"amazon-comprehend",
						"elastic-ip",
						"amazon-quicksight",
						"amazon-qldb",
						"amazon-memory-db",
						"aws-sdk-rust",
						"amazon-elb",
						"aws-lambda",
						"aws-sdk-cpp",
						"amazon-ami",
						"amazon-lex",
						"aws-mobilehub",
						"alexa-skills-kit",
						"amazon-location-service",
						"aws-dms",
						"aws-copilot",
						"aws-mediapackage",
						"aws-elb",
						"aws-sct",
						"amazon-lightsail",
						"aws-acm",
						"aws-sdk-java-2.0",
						"aws-security-hub",
						"alexa-interaction-model",
						"aws-step-functions",
						"amazon-keyspaces",
						"amazon-elasticsearch",
						"amazon-elastic-beanstalk",
						"amazon-app-runner",
						"amazon-sagemaker",
						"amazon-ivs",
						"amazon-kendra",
						"amazon-sumerian",
						"aws-xray",
						"amazon-forecast",
						"amazon-waf",
						"amazon-swf",
						"aws-cli",
						"amazon-macie",
						"amazon-sns",
						"amazon-bedrock",
						"amazon-managed-blockchain",
						"aws-service-catalog",
						"amazon-ecs",
						"amazon-opensearch",
						"amazon-neptune",
						"aws-documentdb",
						"aws-application-load-balancer",
						"aws-codeartifact",
						"amazon-elasticache",
						"amazon-cloudwatchlogs",
						"aws-databrew",
						"aws-transfer-family",
						"alexa-flash-briefing-skill",
						"amazon-emr",
						"aws-iot",
						"amazon-ebs",
						"aws-sdk-go",
						"aws-media-convert",
						"aws-sdk-js-v3",
						"alexa-presentation-language",
						"amazon-athena",
						"aws-codepipeline",
						"aws-cloudshell",
						"amazon-guardduty",
						"aws-config",
						"aws-iot-sitewise",
						"aws-datasync",
						"aws-resource-group",
						"aws-certificate-manager",
						"aws-nlb",
						"amazon-cloudsearch",
						"aws-sso",
						"aws-amplify",
						"aws-deeplens",
						"aws-iam-identity-center",
						"amazon-simpledb",
						"aws-sdk",
						"amazon-efs",
						"aws-cloudmap",
						"aws-codestar",
						"amazon-cloudfront",
						"amazon-cloudtrail",
						"aws-mediaconnect",
						"aws-sdk-comprehend",
						"aws-app-mesh",
						"amazon-imagebuilder",
						"aws-directory-services",
						"aws-opsworks",
						"amazon-connect",
						"aws-serverless",
						"aws-fargate",
						"amazon-elastic-transcoder",
						"aws-auto-scaling",
						"amazon-cloudhsm",
						"amazon-ec2",
						"aws-lambda-powertools",
						"aws-sdk-mock",
						"aws-security-group",
						"aws-data-exchange",
						"aws-sdk-android",
						"amazon-dynamodb-dax",
						"aws-api-gateway",
						"amazon-cognito",
						"aws-billing",
						"aws-elastictranscoder",
						"aws-media-live",
						"amazon-s3",
						"amazon-textract",
						"alexa-account-linking",
						"amazon-transcribe",
						"amazon-kinesis-analytics",
						"aws-codeguru",
						"aws-mediastore",
						"amazon-rekognition",
						"aws-direct-connect",
						"amazon-timestream",
						"amazon-workdocs",
						"aws-reserved-instances",
						"amazon-sqs",
						"aws-vpn",
						"aws-iot-events",
						"amazon-fsx",
						"aws-copilot-cli",
						"amazon-personalize",
						"amazon-aurora",
						"amazon-ses",
						"amazon-appflow",
						"aws-graviton",
						"amazon-eks",
						"aws-organizations",
						"aws-cdk",
						"aws-codecatalyst",
						"amazon-redshift-spectrum",
						"amazon-ecr",
						"aws-cloud9",
					],
					external_links: [
						{
							type: "website",
							link: "https://aws.amazon.com",
						},
						{
							type: "support",
							link: "mailto:awscollective@amazon.com",
						},
						{
							type: "twitter",
							link: "https://twitter.com/awsdevelopers",
						},
						{
							type: "github",
							link: "https://github.com/aws",
						},
						{
							type: "facebook",
							link: "https://facebook.com/amazonwebservices",
						},
						{
							type: "instagram",
							link: "https://instagram.com/amazonwebservices",
						},
					],
					description:
						"Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. The AWS Collective is a community-driven site with resources for  developers.",
					link: "/collectives/aws",
					name: "AWS",
					slug: "aws",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 158378,
			name: "amazon-web-services",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 155616,
			name: "bash",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 152163,
			name: "git",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 151442,
			name: "oracle",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 148009,
			name: "spring-boot",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 145926,
			name: "dataframe",
		},
		{
			collectives: [
				{
					tags: [
						"google-dataflow",
						"dialogflow-cx",
						"google-cloud-dataprep",
						"google-cloud-data-transfer",
						"google-cloud-vision",
						"google-cloud-armor",
						"firebase-crash-reporting",
						"google-cloud-webrisk",
						"google-app-engine-deploy",
						"google-cloud-repository",
						"google-cloud-print",
						"google-cloud-data-fusion",
						"google-compute-engine",
						"google-cloud-deploy",
						"google-cloud-datastore",
						"google-cloud-instances",
						"google-cloud-messaging",
						"google-cloud-dataproc",
						"google-cloud-tpu",
						"google-cloud-datalab",
						"google-cloud-shell-editor",
						"firebase-polymer",
						"jib",
						"google-cloud-filestore",
						"google-cloud-functions",
						"google-cloud-networking",
						"firebase-tools",
						"google-cloud-language",
						"firebase-security",
						"firebaseui",
						"looker",
						"google-cloud-internal-load-balancer",
						"google-container-optimized-os",
						"firebase-database",
						"recaptcha-enterprise",
						"firebase-machine-learning",
						"firebase-predictions",
						"google-cloud-monitoring",
						"firebase-notifications",
						"google-app-engine-python",
						"firebase-analytics",
						"google-cloud-speech",
						"firebase-ab-testing",
						"google-cloud-recommendation",
						"firebase-remote-config",
						"google-cloud-dns",
						"google-cloud-network-load-balancer",
						"google-cloud-bigtable",
						"gcloud",
						"google-cloud-storage-r",
						"google-app-engine",
						"google-cloud-healthcare",
						"google-cloud-transcoder",
						"firebase-cli",
						"google-cloud-kms",
						"google-migrate-for-compute-engine",
						"firebase-realtime-database",
						"google-cloud-php-client",
						"google-cloud-resource-manager",
						"firebase-cloud-messaging",
						"firebase",
						"google-cloud-dataflow",
						"google-cloud-powershell",
						"maven-jib",
						"google-cloud-endpoints",
						"google-cloud-sql",
						"google-cloud-automl",
						"firebase-dynamic-links",
						"google-cloud-run",
						"google-cloud-dlp",
						"google-cloud-instance-template",
						"google-cloud-translate",
						"dialogflow-es-fulfillment",
						"google-cloud-intellij",
						"google-cloud-iot",
						"google-anthos",
						"firebase-mlkit",
						"google-cloud-api-gateway",
						"dialogflow-es",
						"google-app-engine-launch",
						"google-cloud-python",
						"firebase-storage",
						"firebase-admob",
						"google-cloud-storage",
						"google-app-engine-go",
						"google-cloud-save",
						"google-cloud-marketplace",
						"google-container-os",
						"firebase-queue",
						"google-cloud-ai-platform-pipelines",
						"google-cloud-search",
						"google-cloud-billing",
						"firebase-app-indexing",
						"google-cloud-dataproc-metastore",
						"google-cloud-stackdriver",
						"google-cloud-automl-nl",
						"google-analytics-firebase",
						"react-native-firebase",
						"firebase-authentication",
						"google-cloud-spanner",
						"google-cloud-shell",
						"google-cloud-cpp",
						"google-cloud-print-privet",
						"google-cloud-launcher",
						"google-cloud-test-lab",
						"google-cloud-debugger",
						"google-cloud-tools",
						"apigee-baas",
						"google-cloud-node",
						"firebase-job-dispatcher",
						"google-translate",
						"google-cloud-spanner-emulator",
						"firebase-test-lab",
						"firebase-extensions",
						"google-cloud-url-maps",
						"google-cloud-pubsub",
						"google-fusion-tables",
						"nativescript-firebase",
						"google-cloud-proxy",
						"looker-studio",
						"google-cloud-http-load-balancer",
						"google-cloud-ops-agent",
						"google-cloud-trace",
						"google-cloud-nl",
						"google-container-builder",
						"google-cloud-talent-solution",
						"google-cloud-code",
						"google-cloud-profiler",
						"google-app-engine-patch",
						"google-cloud-scheduler",
						"google-cloud-cdn",
						"google-cloud-ml",
						"google-cloud-visualstudio",
						"google-cloud-ai",
						"google-cloud-identity",
						"google-cloud-asset-inventory",
						"google-kubernetes-engine",
						"google-cloud-iam",
						"google-cloud-pubsublite",
						"google-cloud-sdk",
						"google-bigquery",
						"google-container-registry",
						"stackdriver",
						"google-app-engine-golang",
						"google-cloud-firestore",
						"google-cloud-identity-aware-proxy",
						"firebase-admin",
						"google-cloud-endpoints-v2",
						"google-prediction",
						"vertex-ai-search",
						"google-cloud-robotics",
						"google-cloud-source-repos",
						"google-app-engine-php",
						"firebase-console",
						"react-redux-firebase",
						"firebase-in-app-messaging",
						"google-cloud-error-reporting",
						"cloud-document-ai",
						"google-cloud-console",
						"google-cloud-composer",
						"google-cloud-ml-engine",
						"google-cloud-workstations",
						"google-cloud-vertex-ai",
						"google-cloud-tasks",
						"firebase-hosting",
						"firebase-util",
						"google-cloud-registry",
						"google-cloud-memorystore",
						"google-cloud-interconnect",
						"google-cloud-build",
						"google-cloud-load-balancer",
						"firebase-performance",
						"rest-firebase",
						"firebasesimplelogin",
						"bigtable",
						"redux-saga-firebase",
						"google-cloud-platform",
						"cordova-plugin-firebasex",
						"firebase-app-check",
						"google-cloud-metrics",
						"google-cloud-router",
						"google-cloud-vpn",
						"firebase-app-distribution",
						"firebase-invites",
						"firebase-assistant",
						"apigee",
						"google-cloud-logging",
					],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective for developers who utilize Google Cloud’s infrastructure and platform capabilities. This collective is organized and managed by the Stack Overflow community.",
					link: "/collectives/google-cloud",
					name: "Google Cloud",
					slug: "google-cloud",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 143246,
			name: "firebase",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 141560,
			name: "list",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 140263,
			name: "vb.net",
		},
	],
	has_more: true,
	quota_max: 10000,
	quota_remaining: 9990,
};

const page3: StackExchangeWrapper<TagRaw> = {
	items: [
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 140216,
			name: "multithreading",
		},
		{
			collectives: [
				{
					tags: [
						"azure-advisor",
						"azure-runbook",
						"azure-data-sync",
						"azure-appfabric",
						"azure-android-sdk",
						"azure-china",
						"azure-app-api",
						"azure-http-trigger",
						"azure-application-insights",
						"azure-anomaly-detector",
						"azure-custom-providers",
						"azure-servicebus-queues",
						"azure-free-services",
						"azure-security-center",
						"microsoft-entra-private-access",
						"azure-authentication",
						"azure-eventgrid",
						"fhir-server-for-azure",
						"azure-billing",
						"azure-object-anchors",
						"terraform-provider-azure",
						"azure-compute-emulator",
						"microsoft-entra-external-id",
						"azure-lab-services",
						"azure-subscription",
						"azure-data-factory",
						"azure-stack",
						"azure-iot-dps",
						"azure-elastic-sharding",
						"azure-application-gateway",
						"azure-remote-rendering",
						"azure-custom-domain",
						"azure-app-configuration",
						"azure-resource-manager",
						"azure-front-door",
						"azure-cognitive-search",
						"azure-diagnostics",
						"azure-servicebus-subscriptions",
						"azure-stream-analytics",
						"azure-alerts",
						"azure-iot-suite",
						"azure-digital-twins",
						"azure-oauth",
						"azure-pipelines-release-pipeline",
						"azure-mobile-engagement",
						"azure-security",
						"azureservicebus",
						"azure-ai-translator",
						"azure-logic-apps",
						"azure-blockchain-service",
						"azure-acr",
						"azure-managed-database",
						"azure-private-link",
						"azure-resource-group",
						"azure-dashboard",
						"azure-billing-api",
						"azure-secrets",
						"sql-azure-alerts",
						"azure-purview",
						"azure-git-deployment",
						"azure-service-fabric",
						"azure-language-understanding",
						"azure-application-insights-profiler",
						"azure-service-principal",
						"azure-adf",
						"azure-management-groups",
						"azure-ad-b2b",
						"azure-ad-msal",
						"azure-monitor-workbooks",
						"azure-sdk-ruby",
						"azure-agent",
						"azure-ase",
						"azure-text-translation",
						"azure-app-service-plans",
						"azure-load-testing",
						"azure-performancecounters",
						"azure-sql-server",
						"passport-azure-ad",
						"azure-webjobs-continuous",
						"azure-cosmosdb-tables",
						"azure-batch-account",
						"azure-web-pubsub",
						"azure-webjobs",
						"azure-synapse",
						"azure-signalr",
						"azure-vm-scale-set",
						"azure-ad-b2c-custom-policy",
						"azure-sdk-js",
						"azure-management-api",
						"azure-scheduler",
						"azure-service-runtime",
						"azure-synapse-link",
						"azure-ad-domain-services",
						"azure-log-analytics",
						"azure-container-instances",
						"azure-ml-component",
						"azure-caching",
						"azure-linux",
						"azure-application-registration",
						"azure-log-analytics-workspace",
						"azure-mysql-database",
						"azure-hdinsight",
						"azure-data-catalog",
						"azure-media-services",
						"azure-spring-boot",
						"azure-ai",
						"azure-identity",
						"azure-bastion",
						"azure-mapping-data-flow",
						"azure-managed-disk",
						"azure-form-recognizer",
						"azure-qna-maker",
						"azure-ad-verifiable-credentials",
						"azure-calculator",
						"azure-ilb",
						"azure-sql",
						"azure-sdk-for-ruby",
						"azure-ml-pipelines",
						"azure-iot-sdk",
						"azure-sas",
						"azure-durable-functions",
						"azure-aks",
						"azure-databricks",
						"azure-data-studio",
						"spark-bash-azure-databricks",
						"azure-sdk-php",
						"azure-auto-ml",
						"azure-ad-graph-api",
						"azure-public-ip",
						"azure-fluent-api",
						"azure",
						"azure-sql-reporting",
						"azure-sentinel",
						"azure-container-apps",
						"azure-media-player",
						"azure-rm-template",
						"azureclicredential",
						"azure-defender",
						"azure-notebooks",
						"azure-gov",
						"azure-iot-hub-device-management",
						"azure-cosmosdb-cassandra-api",
						"azure-dsvm",
						"azure-servicebus-topics",
						"azure-eventhub",
						"azure-rest-api",
						"azureadgraph-deprecation",
						"azure-nsg",
						"azure-in-role-cache",
						"azure-blob-storage",
						"azure-functions-proxies",
						"azure-metrics-advisor",
						"azure-availability-set",
						"azure-hub",
						"azure-backup-vault",
						"azure-feature-manager",
						"azure-bicep",
						"azure-static-web-app",
						"azure-web-roles",
						"azure-private-dns",
						"azure-triggers",
						"azure-managed-app",
						"azure-function-queue",
						"azure-site-recovery",
						"azure-storage-account",
						"azure-queues",
						"azure-powershell",
						"azure-sdk-for-java",
						"azure-analysis-services",
						"azuremlsdk",
						"azure-sphere",
						"azure-monitoring",
						"azure-application-roles",
						"azure-rtos",
						"azure-deployment-slots",
						"azure-sdk-.net",
						"azure-update-management-center",
						"azure-service-hooks",
						"adal.js",
						"azure-storage",
						"azure-policy",
						"azure-bot-service",
						"azure-integration-account",
						"rebus-azureservicebus",
						"azure-web-app-firewall",
						"azure-ad-role",
						"azure-blueprints",
						"azure-servicebusrelay",
						"azure-ddos",
						"azure-elasticpool",
						"azure-role-environment",
						"azure-hybrid-connections",
						"azure-machine-learning-service",
						"azure-ad-v2",
						"azure-functions-runtime",
						"azure-node-sdk",
						"azure-database-mysql",
						"azure-storage-explorer",
						"azure-workflow-automation",
						"defaultazurecredential",
						"azure-static-website-hosting",
						"azure-service-fabric-mesh",
						"azure-api-management",
						"azure-keyvault",
						"azure-vpn",
						"azure-data-share",
						"azure-relay",
						"azure-managed-identity",
						"azure-active-directory",
						"azure-cli2",
						"azure-function-app",
						"azure-mcd",
						"kql",
						"azure-notificationhub",
						"azure-service-plan",
						"azure-appservice",
						"azure-web-app-for-containers",
						"azure-functions-core-tools",
						"azure-disk",
						"azure-function-http",
						"azure-ad-powershell-v2",
						"azure-pack",
						"azure-xplat-cli",
						"azureportal",
						"azure-iot-central",
						"azure-management-portal",
						"azure-static-website-routing",
						"microsoft-entra-internet-access",
						"azure-container-registry",
						"azure-function-app-proxy",
						"azure-rbac",
						"azure-availability-zones",
						"azure-sdk-for-go",
						"microsoft-entra-id",
						"azure-container-service",
						"azure-webjobs-triggered",
						"azure-connect",
						"azure-resource-graph",
						"azure.data.tables",
						"azure-webapps",
						"azure-database-postgresql",
						"django-pyodbc-azure",
						"azure-migrate",
						"spring-cloud-azure",
						"azure-acs",
						"azure-python-sdk",
						"azure-management",
						"azure-maps",
						"adal",
						"azure-sql-edge",
						"azure-store",
						"azure-batch",
						"azure-zulu",
						"azure-cosmosdb-gremlinapi",
						"azure-affinity-group",
						"azure-spring-cloud",
						"azure-sdk",
						"azurekinect",
						"azure-cosmosdb-sqlapi",
						"azure-storage-files",
						"azure-search-.net-sdk",
						"azureml-python-sdk",
						"azure-worker-roles",
						"azure-blockchain-workbench",
						"azure-clouddrive",
						"azure-configuration",
						"azure-storage-queues",
						"azure-speech",
						"azureshell",
						"azure-webjobssdk",
						"azure-elastic-scale",
						"azure-logic-app-standard",
						"azure-data-lake-gen2",
						"azure-managed-grafana",
						"azure-quantum",
						"azure-waf",
						"azure-arc",
						"azure-adal-deprecation",
						"azure-blob-trigger",
						"azure-data-lake",
						"azure-postgresql",
						"azurerm-app-service",
						"sql-server-azure",
						"azure-cloud-shell",
						"azure-application-proxy",
						"azure-databoxfamily",
						"azure-promptflow",
						"azure-regions",
						"azure-cosmosdb-mongoapi",
						"azure-sql-database",
						"azure-marketplace",
						"microsoft-custom-vision",
						"azure-iot-hub",
						"azure-cognitive-services",
						"azure-devtest-labs",
						"azure-image-builder",
						"azure-tablequery",
						"pulumi-azure",
						"azure-storage-emulator",
						"azure-industrial-iot",
						"azure-cdn",
						"azure-information-protection",
						"azure-functions",
						"azure-files",
						"azure-webhooks",
						"azure-data-explorer",
						"azure-cosmosdb-emulator",
						"azure-sql-managed-instance",
						"azure-video-indexer",
						"azure-packaging",
						"azure-iot-hub-device-update",
						"azure-app-service-envrmnt",
						"azure-application-settings",
						"azure-ad-b2c",
						"azure-automation",
						"azure-cosmosdb",
						"azure-sdk-go",
						"azure-cosmosdb-mongovcore",
						"azure-mobile-services",
						"azure-table-storage",
						"azure-functions-docker",
						"azure-private-dns-zone",
						"azure-dns",
						"azure-cli",
						"azure-web-app-service",
						"azure-file-copy",
						"azure-virtual-network",
						"azure-static-web-app-routing",
						"azure-sdk-python",
						"azure-vm-templates",
						"azure-virtual-machine",
						"azure-deployment",
						"azure-dev-spaces",
						"azure-cosmosdb-changefeed",
						"azure-java-tools",
						"azure-monitor",
						"azure-timeseries-insights",
						"azure-analytics",
						"azure-app-registration",
						"azure-anomaly-detection",
						"azure-cloud-services",
						"azure-iot-edge",
						"azure-spatial-anchors",
						"azure-rm",
						"azure-autoscaling-block",
						"azure-compliance-policy",
						"azure-traffic-manager",
						"azure-java-sdk",
						"sitecore-azure",
						"azure-oms",
						"azure-communication-services",
						"sql-azure-federations",
						"azure-redis-cache",
						"azure-function-async",
						"azure-load-balancer",
						"azure-api-apps",
						"azure-emulator",
						"azure-vm",
						"azure-debugger",
						"azure-cost-calculation",
						"kitchen-azurerm",
					],
					external_links: [
						{
							type: "support",
							link: "https://stackoverflow.com/contact?topic=15",
						},
					],
					description:
						"A collective for developers to engage, share, and learn about Microsoft Azure’s open-source frameworks, languages, and platform. This collective is organized and managed by the Stack Overflow community.",
					link: "/collectives/azure",
					name: "Microsoft Azure",
					slug: "azure",
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 139268,
			name: "azure",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 137408,
			name: "docker",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 136993,
			name: "react-native",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 124956,
			name: "eclipse",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 120541,
			name: "algorithm",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 117607,
			name: "macos",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 117036,
			name: "powershell",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 115229,
			name: "visual-studio",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 113965,
			name: "image",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 113818,
			name: "numpy",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 113590,
			name: "forms",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 112369,
			name: "scala",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 111225,
			name: "function",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 107276,
			name: "vue.js",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 103114,
			name: "twitter-bootstrap",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 102149,
			name: "performance",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 101203,
			name: "api",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 100619,
			name: "selenium",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 99001,
			name: "winforms",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 96398,
			name: "loops",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 95503,
			name: "express",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 95242,
			name: "python-2.7",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 95095,
			name: "kotlin",
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 95017,
			name: "hibernate",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 94916,
			name: "matlab",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 94823,
			name: "sqlite",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 93686,
			name: "dart",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 93186,
			name: "rest",
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 92641,
			name: "shell",
		},
	],
	has_more: false,
	quota_max: 10000,
	quota_remaining: 9989,
};

const pages = [page1, page2, page3];
