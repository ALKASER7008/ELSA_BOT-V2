FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/ALKASER7008/ELSA_BOT-V2/ /root/ALKASER7008
WORKDIR /root/ALKASER7008/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
