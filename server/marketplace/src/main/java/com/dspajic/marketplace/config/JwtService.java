package com.dspajic.marketplace.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

/*
* We need new dependencies in order to extract information from our JWT token
*/

/*
*JWT token - json web token - claims to be transfered encoded as json objects digitally signed using jwt signature
* HEADER - two parts : type of token and type of algorithm being used for encryption
* PAYLOAD -contains the claims => info about the user and additional data
*           Registered claims - not mandatory, recommended, ISS issuer, subject, expiration time etc.
*           Public claims - custom claims to share info between parties
* SIGNATURE - used to verify the sender of JWT token and to assure the message wasnt changed along the way
*
 */

@Service
public class JwtService {

    private static final String SECRET_KEY = "38ac1c64cfa994a352632173a716b3b4c72ce1319a310c77b739788c3ba05737";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {      //generating a JWT token out of user details
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(                //generating a JWT token out of extra claims and user details
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 *24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {        // we want to validate that this token belongs to this user
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {             // a function for extracting all claims from our JWT token
        return Jwts
                .parser()
                .setSigningKey(getSignInKey())      // secret that is used to digitally sign JWT; used for verifying, in combination with the algorithm makes up the signature
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);       //decoding our sign in key
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
