import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovVhsekerApi implements ICredentialType {
        name = 'N8nDevApisetuGovVhsekerApi';

        displayName = 'Apisetu Gov Vhseker API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovVhseker/apisetu-gov-vhseker.svg', dark: 'file:../nodes/ApisetuGovVhseker/apisetu-gov-vhseker.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/vhseker/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/vhseker/v3',
                        description: 'The base URL of your Apisetu Gov Vhseker API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
